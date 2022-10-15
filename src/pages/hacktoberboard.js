import React, { useEffect, useState } from "react";
import "../assets/css/hacktober.css";
import register from "../assets/images/events/register.png";
import Hacktober_Heading from "../assets/images/events/HacktoberHeading.png";
import Hacktober_Year from "../assets/images/events/HacktoberYear.png";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { padding } from "@mui/system";
import COMMUNITY from '../json/githubrepo.json';
import axios from "axios";
import { get } from "reactjs-captcha/dist/captcha-settings";

const Hacktober = () => {
  
  

  // project card data
  const [data, setData] = useState([]);

 // get data from https://hacktoberfest-leaderboard.lordblackwood.repl.co/leaderboard with axios and corsoption

    
    const getdata = async () => {
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Credentials": "true"
        }
        const cors = "https://cors-anywhere.herokuapp.com/";
        const url = "https://hacktoberfest-leaderboard.lordblackwood.repl.co/leaderboard";
        const res = await axios.get( url, { headers: headers } );
        console.log(res.data);

        setData(res.data);

    }
    useEffect(() => {
        getdata();
    }, []);





    
        
    

    


  return (
    <div >
      {/* landing */}
      <div>
        <Header />
       
      </div>

     
      {/* leaderboard */}
      
	<section id="leaderboard" style={{marginTop:'10vh'}}>
		<nav class="ladder-nav">
			<div class="ladder-title">
			<h1>leaderboard</h1>
			</div>
			<div class="ladder-search">
				<input type="text" id="search-leaderboard" class="live-search-box" placeholder="Search Team, Player..." />
			</div>
		</nav>
		<table id="rankings" class="leaderboard-results" width="100%">
			<thead>
				<tr>
					<th>Rank</th>
					<th>github </th>
					<th>Commits</th>
				
	
				</tr>
			</thead>
			<tbody>
            
                {data.commits && Object.keys(data.commits).map((key, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{data.username[key]}</td>
                            <td>{data.commits[key]}</td>
                        </tr>
                    )
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
export default Hacktober;
