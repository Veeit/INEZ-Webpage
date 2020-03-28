import React from 'react';
import Ctext from './Ctext';
// import logo from '../../images/logo.png'
import { Link } from "gatsby"

export default class Cfooter extends React.Component {
render() {
    return (
        <div className="Cfooter">
            <footer>
                <div className="left" >
                    <p><Link to={`/imprint`}>Imprint</Link></p>
                    <p><Link to={`/datasecruity`}>Data protection</Link></p>
                </div>
                <div className="right">
                    <img src="/images/logo.png" alt="WhatsLeft" />
                </div>
            </footer>
        </div>
        )
    }
}