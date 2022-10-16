import '../assets/css/hacktober.css';

import React, { useEffect, useState } from 'react';

import COMMUNITY from '../json/githubrepo.json';
import { FaGithubAlt } from 'react-icons/fa';
import { GiDiamondTrophy } from 'react-icons/gi';
import Hacktober_Heading from '../assets/images/events/HacktoberHeading.png';
import Hacktober_Year from '../assets/images/events/HacktoberYear.png';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import Spinner from '../component/Spinner';
import axios from 'axios';
import { debounce } from '../utils';
import { get } from 'reactjs-captcha/dist/captcha-settings';
import { padding } from '@mui/system';
import register from '../assets/images/events/register.png';

const Hacktober = () => {
  // project card data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [immutableData, setimmutableData] = useState([])
  // get data from https://hacktoberfest-leaderboard.lordblackwood.repl.co/leaderboard with axios and corsoption

  const getdata = async () => {
    setLoading(!loading);
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    };
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://hacktoberfest-leaderboard.lordblackwood.repl.co/leaderboard';
    const res = await axios.get(url, { headers: headers });
    console.log(res.data);

    setData(res.data);
    setimmutableData(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleSearch = (e) => {
    let searchWrd = e.target.value.toLowerCase();
    let newDataObject = {};
    newDataObject['commits'] = data.commits;
    newDataObject['username'] = {};
    if (searchWrd == '') {
      setData({ commits: data.commits, username: immutableData.username });
    } else {
      Object.values(data.username).map((uname, index) => {
        if (uname.toLowerCase().search(searchWrd) > -1) {
          newDataObject['username'][index] = uname;
        }
      });
      setData({ commits: data.commits, username: newDataObject['username'] });
    }
    console.log("🚀 ~ file: hacktoberboard.js ~ line 61 ~ handleSearch ~ data", data)
  };
  return (
    <div>
      {/* landing */}
      <div>
        <Header />
      </div>

      {/* leaderboard */}

      <section id='leaderboard' style={{ marginTop: '10vh' }}>
        <nav class='ladder-nav'>
          <div class='ladder-title'>
            <h1>leaderboard</h1>
          </div>
          <div class='ladder-search'>
            <input
              type='text'
              id='search-leaderboard'
              class='live-search-box'
              onChange={(e) => {
                handleSearch(e);
              }}
              placeholder='Search Team, Player...'
            />
          </div>
        </nav>
        {loading ? (
          <Spinner />
        ) : (
          <table id='rankings' class='leaderboard-results' width='100%'>
            <thead>
              <tr>
                <th>Rank</th>
                <th>github </th>
                <th>Commits</th>
              </tr>
            </thead>
            <tbody>
              {data.commits &&
                Object.keys(data.commits).map((key, index) => {
                  return (
                    <tr>
                      {data.username[key] && (
                        <>
                          <td>{index + 1}</td>
                          <td>
                            <FaGithubAlt /> {data.username[key]}
                          </td>
                          <td>
                            <GiDiamondTrophy /> {data.commits[key]}
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </section>
      {/* register section */}

      {/* footer section */}
      <div>
        <footer className='footer01' id='footer'>
          <span>
            <div>
              Designed with <Link to='#'>&hearts;</Link> by
              <a href='https://github.com/semikolan-co'> Semikolan</a>
            </div>
          </span>
        </footer>
      </div>
    </div>
  );
};
export default Hacktober;
