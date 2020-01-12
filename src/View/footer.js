import React from 'react';
import Ctext from './Ctext';
import logo from './img/logo.png'
import {Link} from 'react-router-dom'

export default class Cfooter extends React.Component {
render() {
    return (
        <div className="Cfooter">
            <footer>
                <div className="left" >
                    <p><Link to="/imprint">Imprint</Link></p>
                    <p><Link to="/data-protection">Data protection</Link></p>
                </div>
                <div className="right">
                    <img src={logo} alt="INEZ - Budget Planner logo" />
                </div>
            </footer>
        </div>
        )
    }
}