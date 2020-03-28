import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Ctextview from '../components/View/Ctextview';
import CthreeText from '../components/View/CthreeText';

import dashbaordImg from '../images/header-img.png'
import listImg from '../images/iphone-Liste.png'
import stockImg from '../images/iphone-Stock.png'
import editImg from '../images/iphone-edit.png'

const uuidv4 = require('uuid/v4');

function textViewModel(headline, subheadline, text, imgLeft, img) {
  this.headline = headline;
  this.subheadline = subheadline;
  this.text = text;
  this.imgLeft = imgLeft;
  this.img = img;
  this.id = String(uuidv4())
}

const headText = new textViewModel(
  "WahtsLeft", 
  "wir halten den laden an laufen!", 
  "WhatsLeft ist eine kostenlose Plattform auf der die Nutzer Warenbestände einzelner Produktgruppen in den Supermärkten ihrer Umgebung einsehen und aktualisieren können. Das Projekt WhatsLeft ist durch den Hackathon der Deutsche Bundesregierung entschanden #WirVsVirus!",
  "false", 
  dashbaordImg)

const features = [
  new textViewModel(
    "", 
    "Finde dein Laden", 
    "WhatsLeft benutzt die Google Maps API um alle Läden der gegend zu finden, somit ist garantiert das auch der Laden bei dir um die Ecke bei uns zu finden ist.",
    "false", 
    listImg),
  new textViewModel(
      "", 
      "Einsicht in Warenbestände", 
      "Lass dir für deinen Supermarkt den Warenbestand für unsere Produktgruppen anzeigen! Somit musst du nie wieder zum Supermarkt gehen der doch nicht die Produkte hat die du wirklich willst.",
      "true", 
      stockImg),
  new textViewModel(
    "", 
    "Update den Warenbestand", 
    "Halte andere auf den laufenden was akuell in den Laden verfügbar ist und was nicht. Das hilft nicht nur unnötige wege zu ersparen sonderen auch den Laden möglichst leer zu halten und somit das infektionsrisiko für Corvid-19 zu verringern.",
    "false", 
    editImg),
  ]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <header className="App-header">
        <Ctextview 
            imgLeft={headText.imgLeft} 
            img={headText.img} 
            headline={headText.headline}
            subheadline={headText.subheadline}
            text={headText.text}
            ></Ctextview>
      </header>
      <main>
        <h4>Features</h4>
        {
          features.map(element => {
            return <Ctextview 
            key={element.id} 

            imgLeft={element.imgLeft} 
            img={element.img} 
            headline={element.headline}
            subheadline={element.subheadline}
            text={element.text}
            ></Ctextview>
          })
        }

        <CthreeText></CthreeText>
      </main>
      
  </Layout>
)

export default IndexPage
