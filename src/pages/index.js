import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Ctextview from '../components/View/Ctextview';
import CthreeText from '../components/View/CthreeText';

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
  "WhatsLeft", 
  "Wir halten den Laden am Laufen!", 
  "WhatsLeft ist eine kostenlose Plattform, auf der die Nutzer Warenbestände einzelner Produktgruppen in den Supermärkten ihrer Umgebung einsehen und aktualisieren können. Das Projekt WhatsLeft ist durch den Hackathon der Deutsche Bundesregierung entstanden #WirVsVirus!",
  "false", 
  "/images/light/header-img.png")

const features = [
  new textViewModel(
    "", 
    "Finde deinen Laden", 
    "WhatsLeft benutzt die Google Maps API, um alle Läden der Gegend zu finden. Somit ist garantiert, dass auch der Laden bei dir um die Ecke bei uns zu finden ist.",
    "false", 
    '/images/light/iphone-Liste.png'),
  new textViewModel(
      "", 
      "Einsicht in Warenbestände", 
      "Lass dir für deinen Supermarkt den Warenbestand für unsere Produktgruppen anzeigen! Somit musst du nie wieder zum Supermarkt gehen, der doch nicht die Produkte hat, die du wirklich willst.",
      "true", 
      '/images/light/andorid-stock.png'),
  new textViewModel(
    "", 
    "Update den Warenbestand", 
    "Halte andere darüber auf dem Laufenden, was aktuell im Laden verfügbar ist und was nicht. Das hilft nicht nur unnötige Wege zu sparen, sondern auch den Laden möglichst leer zu halten und somit das Infektionsrisiko für Covid-19 zu verringern.",
    "false", 
    'images/light/web-edit.png'),
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
        <div className="Download">
          <h4>Lade unsere App herunter</h4>
          <div>
            <div>
              <a href="https://testflight.apple.com/join/695UDaNq"><img src="images/AppStore-Badge.svg" alt="Laden im App Store" title="Laden im App Store" height="50" width="150"></img></a>
              <img src="images/google-play-badge.png" alt="Laden im Play Store" title="Laden im Play Store" height="50" width="170"></img>
            </div>
          </div>
          <div className="link">
            <h3>Kein bock auf app ?</h3>
            <a href="https://whatsleft.wirvsvirus.net">Nutz unsere Web App</a>
          </div>
        </div>
      </main>
      
  </Layout>
)

export default IndexPage
