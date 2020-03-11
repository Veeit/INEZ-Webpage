import React from 'react';
import { Link } from "gatsby"

export default class Cfooter extends React.Component {
render() {
    return (
        <div className="Cfooter">
            <footer>
                <div className="left" >
                    <p><Link to={`/imprint`}>Imprint</Link></p>
                    <p><Link to={`/datasecruity`}>Data protection</Link></p>
                    <p><Link to={`/contact`}>Contact</Link></p>
                </div>
            </footer>
        </div>
        )
    }
}