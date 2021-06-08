import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import {auth} from "../firebase";
import API from "./API";
import Timer from "react-compound-timer";




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      score:null,
      timer:false
      // isCorrect: [],
      // rightAnswers: 0,
    };
    this.logValue = this.logValue.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  logValue(e) {
    const value = Number(e.target.value) || e.target.value;
    // const isCorrect = this.state.isCorrect;
    const index = e.target.getAttribute("data-whichQuestionIndex");
    // const rightAnswer = this.state.questions[index].rightAnswer;
    const questions = this.state.questions;

    questions[index].currentAnswer = value;
    // isCorrect[index] = rightAnswer === value;

    // let score = 0;
    // score = isCorrect.filter(function (d) {
    //   return d;
    // }).length;

    this.setState({
      questions,
      // isCorrect,
      // rightAnswers: score,
    });
  }

  submitAnswer(){
    // console.log(this.state)
  
    API.post(`submitanswer`,
    {questions:this.state.questions}
    )
      .then((res) => {
        console.log(res.data);
        const score = res.data.score;
        this.setState({ score:score });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });}

  componentDidMount() {
    // const isCorrect = [];
    // this.state.questions.forEach(() => isCorrect.push(false));

    // this.setState({
    //   isCorrect,
    // });


    API.get(`questions`)
      .then((res) => {
        console.log(res.data);
        const questions = res.data;
        this.setState({ questions:questions, timer: true });
        console.log("Data Recieved",this.state.timer)
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
  }

  render() {
    return (
      <div className="q-div">
        <Timer
          initialTime={20000}
          direction="backward"
          startImmediately={true}
          checkpoints={[
            {
              time: 10000,
              callback: () => console.log("Checkpoint A"),
            },
            {
              time: 1000,
              callback: () => {
                this.submitAnswer()
              },
            },
          ]}
        >
          {() => (
            <React.Fragment>
              Time Left: <Timer.Hours />
              H&nbsp;
              <Timer.Minutes />
              m&nbsp;
              <Timer.Seconds />s
            </React.Fragment>
          )}
        </Timer>
{this.state.score ? <>
<p>Paper has been Submitted</p>
</>:
        <>
        <Questions data={this.state.questions} logValue={this.logValue} />
        <button onClick={this.submitAnswer} className="button">
          Submit
        </button>
        </>
  }
      </div>
    );
  }
}



class Questions extends React.Component {
  render() {
    const questions = this.props.data.map((q, i) => {
      return (
        <div key={q.qId} className="q-container">
          <p>
            Q{i + 1}: &nbsp;<span className="text-strong">{q.question}</span>
          </p>
          {q.answers.map((a,i2) => (
            <div>
              <input
                onChange={this.props.logValue}
                type="radio"
                defaultValue={a}
                data-whichQuestionIndex={i}
                name={q.name}
                id={a+'-'+i2}
              />
              <label htmlFor={a+'-'+i2} >&nbsp;{a}</label>
            </div>
          ))}
        </div>
      );
    });
    return <div>{questions}</div>;
  }
}
