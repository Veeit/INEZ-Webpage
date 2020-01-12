import React from 'react';
import logo from './View/img/logo.png'
import Cfooter from './View/footer'
import { Link } from 'react-router-dom';
import Cnavigation from './View/Navigation';
import './index.css';

class CImprint extends React.Component {
    render() {
      return (
        <div className="imprint navigation">
          <nav >
              <div className="left" >
                    <img src={logo} alt="INEZ - Budget Planner logo" />
                    <p><Link to="/">INEZ</Link></p>
              </div>
              <div className="right">
                <p><a href="https://github.com/users/Veeit/projects/1">bug-tracker</a> | <a href="">makerlog</a></p>
              </div>
          </nav>
          <main>
              <div>
                <h1>Impressum</h1>
                <br />
                <p>
                Verantwortlich für den Inhalt dieser Webseite:<br />
                Veit Progl<br /><br />

                Telefon: +49 (0) 15678 / 522621<br /><br /> 

                <a href="mailto: mail@veit.dev">mail@veit.dev</a><br /><br />

                Postanschrift:<br />
                Veit Progl<br />
                41564 Kaarst<br />
                Maximilan-Kolbe-Str. 7 <br/>
                </p>
            </div>
          </main>
          <Cfooter></Cfooter>
        </div>
      );
    }
  }

export default CImprint;