import React from 'react';
import logo from './img/logo.png'
//

class Cnavigation extends React.Component {
    render() {
      return (
        <div className="navigation">
          <nav >
              <div className="left" >
                    <img src={logo} alt="INEZ - Budget Planner logo" />
                    <p>INEZ</p>
              </div>
              <div className="right">
                <p><a href="https://github.com/users/Veeit/projects/1">bug-tracker</a> | <a href="https://getmakerlog.com/@veitpro">makerlog</a></p>
              </div>
          </nav>
        </div>
      );
    }
  }

export default Cnavigation;