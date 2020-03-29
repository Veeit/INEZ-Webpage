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
            "WhatsLeft ist sicher", 
            "Wir speichern keine personenbezogenen Daten, alles ist anonym. Das ist der Grund, warum wir keinen Login in unserer App haben."
            ),
        new textViewModel(
            "", 
            "WhatsLeft ist überall", 
            "Wir haben nicht nur eine App für Android und iPhone, sondern WhatsLeft ist auch über eine Web App erreichbar. Somit kann jeder WhatsLeft nutzen und anderen helfen!"
            ),
        new textViewModel(
            "", 
            "Weltweit nutzbar", 
            "Wir sind nicht nur auf Deutschland limitiert. Du kannst WhatsLeft weltweit einsetzen!")
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