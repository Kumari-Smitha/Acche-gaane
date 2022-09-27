
import './App.css';

import React, { useState } from "react";



export default function App() {
  const [songs, setSong] = useState([]);
  const songsList = [
    {
      Romantic: [
        {
          song: "Kesariya",
          year: "2022",
          movie: "Brahmastra"
        },
        {
          song: "Galiyan",
          year: "2013",
          movie: "Galiyan"
        },
        {
          song: "Mere rang me",
          year: "1993",
          movie: "Maine pyar kiya"
        },
        {
          song: "Neele neele ambar par",
          year: "189",
          movie: "Kalaakar"
        }
      ]
    },
    {
      Monsoon: [
        {
          song: "Tum se hi",
          year: "2009",
          movie: "Jab we met"
        },
        {
          song: "Bhage re man kahi",
          year: "2008",
          movie: "Chameli"
        },
        {
          song: "Zara Zara",
          year: "1999",
          movie: "RHTDM"
        },
        {
          song: "Kabhi jo badal barse",
          year: "2015",
          movie: "Jackpot"
        }
      ]
    },
    {
      Commute: [
        {
          song: "Ye haseen waadiyan",
          year: "2001",
          movie: "Roja"
        },
        {
          song: "Ae mere Humsafar",
          year: "2002",
          movie: "Baazigar"
        },
        {
          song: "Saibo",
          year: "2003",
          movie: "Shor in the city"
        },
        {
          song: "Patakha Guddi",
          year: "2013",
          movie: "Highway"
        }
      ]
    },
    {
      Party: [
        {
          song: "Psychon saiyaan",
          year: "2018",
          movie: "Saaho"
        },
        {
          song: "Param sundari",
          year: "2022",
          movie: "Mimi"
        },
        {
          song: "Saturday Saturday",
          year: "2016",
          movie: "HSKD"
        },
        {
          song: "The Disco song",
          year: "2013",
          movie: "SOTY"
        }
      ]
    }
  ];

  const displaySongs = (t) => {
    console.log("t", t);
    var a = t[Object.keys(t)];
    console.log("a", a[0]);
    setSong(a);
    // a.map((b)=>setSong(b))
  };

  // console.log(songs)

  // console.log(songsList[0].Romantic[0].song);
  return (
    <>
      <div className="App">
        <div className="gaane">
          <span
            style={{
              marginTop: "1rem",
              fontSize: "xx-large",
              paddingRight: "0.5rem"
            }}
          >
            🎼
          </span>
          <h1>AccheGaane</h1>
        </div>
        
        <p>Checkout my favorite songs. Select a genre to get started.</p>
        
        {songsList.map((t, index) => {
          // console.log(t)
          return (
            <button onClick={() => displaySongs(t)}>{Object.keys(t)}</button>
          );
        })}

        <hr style={{ marginTop: "2rem", width: "80vw" }} />
        <ul className='card-list'>
          {songs.map((t) => {
            return (
              <>
              <li className="card">
                <h4>{t.song}</h4>
                <p>from {t.movie}</p>
                <p>released on {t.year}</p>
              </li>
              <br/>
              </>
            );
          })}
        </ul>
          <br></br>
          <br></br>
      </div>

      <footer className='footer'>
          <p className="footerText">© | 2022 | Kumari Smitha</p>
         
      <ul>
        <li><a href="https://github.com/Kumari-Smitha"><img src="github.png" alt="github"/></a></li>
        <li><a href="https://www.linkedin.com/in/kumari-smitha/"><img src="linkedin.png" alt="linkedin"/></a></li>
        <li><a href="https://twitter.com/Smita_Thakur_"><img src="twitter.png" alt="twitter"/></a></li>
      </ul>
      </footer>
    </>
  );
}

