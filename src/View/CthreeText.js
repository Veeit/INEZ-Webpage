import React from 'react';
import Ctext from './Ctext';
const uuidv4 = require('uuid/v4');

function textViewModel(headline, subheadline, text) {
  this.headline = headline;
  this.subheadline = subheadline;
  this.text = text;

  this.id = String(uuidv4())
}

export default class CthreeText extends React.Component {
render() {
    const threeText = [
        new textViewModel(
            "", 
            "scan your receipt", 
            "update your budget based on your receipt. There is no faster way to update your budget."
            ),
        new textViewModel(
            "", 
            "INEZ is save", 
            "INEZ is 100% save. We don’t send your data to any server to analyse it. "
            ),
        new textViewModel(
            "", 
            "Budget with AI", 
            "All your budgets are analysed with AI to optimse your next shoping tip.")
        ]
 
    return (
        <div className="threeText">
        {
          threeText.map(element => {
            return <Ctext 
            key={element.id} 

            headline={element.headline}
            subheadline={element.subheadline}
            text={element.text}
            ></Ctext>
          })
        }
        </div>
        )
    }
}