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
            "WhatsLeft ist Sicher", 
            "Wir speichern keine personen gebundenen daten, alles ist anonym. Das ist der grund warum wir auch keinen Login in der app haben "
            ),
        new textViewModel(
            "", 
            "WhatsLeft ist überall", 
            "Wir haben nicht nur eine iphone app sondern auch eine Web app und eine Andorid App. Somit kann jeder WhatsLeft nutzen und anderen Helfen!"
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