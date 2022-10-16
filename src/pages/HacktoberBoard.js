import React, { useEffect, useState } from "react";
import "../assets/css/hacktober.css";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaGithubAlt } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";

const HacktoberBoard = () => {
  // project card data
  const [data, setData] = useState([]);

  // get data from https://hacktoberfest-leaderboard.lordblackwood.repl.co/leaderboard with axios and corsoption

  const getdata = async () => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Credentials": "true",
    };
    const cors = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://hacktoberfest-leaderboard.lordblackwood.repl.co/leaderboard";
    const res = await axios.get(url, { headers: headers });
    console.log(res.data);

    setData(res.data);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      {/* landing */}
      <div>
        <Header />
      </div>

      {/* leaderboard */}

      <section id="leaderboard" style={{ marginTop: "10vh" }}>
        <nav class="ladder-nav">
          <div class="ladder-title">
            <h1>Leaderboard</h1>
          </div>
          <div class="ladder-search">
            <input
              style={{ width: "200px" }}
              type="text"
              id="search-leaderboard"
              class="live-search-box"
              placeholder="Search Contributor Name"
            />
          </div>
        </nav>
        <table id="rankings" class="leaderboard-results" width="100%">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Github Username</th>
              <th>Commits</th>
            </tr>
          </thead>
          <tbody>
            {data.commits &&
              Object.keys(data.commits).map((key, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <FaGithubAlt /> {data.username[key]}
                    </td>
                    <td>
                      <GiDiamondTrophy /> {data.commits[key]}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
      {/* register section */}

      {/* footer section */}
      <div>
        <footer className="footer01" id="footer">
          <span>
            <div>
              Designed with <Link to="#">&hearts;</Link> by
              <a href="https://github.com/semikolan-co"> Semikolan</a>
            </div>
          </span>
        </footer>
      </div>
    </div>
  );
};
export default HacktoberBoard;
