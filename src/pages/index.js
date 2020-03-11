import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Ctextview from '../components/View/Ctextview';
import CthreeText from '../components/View/CthreeText';

import dashbaordImg from '../images/dashboard.png'
import budgetImg from '../images/budget.png'
import projectImg from '../images/project.png'
import statisticsImg from '../images/statistics.png'
import meImg from '../images/IMG_2870.jpg'
import octocatImg from '../images/Octocat.png'
import makerlog from '../images/makerlog.png'
import logbot from '../images/logbot.png'
import INEZ from '../images/inez.png'
import shopinglist from '../images/shopinglist.png'
import dyslexia from '../images/dyslexia.png'

const uuidv4 = require('uuid/v4');

function textViewModel(headline, subheadline, text, imgLeft, img, link) {
  this.headline = headline;
  this.subheadline = subheadline;
  this.text = text;
  this.imgLeft = imgLeft;
  this.img = img;
  this.id = String(uuidv4());
  this.link = link;
}

const features = [
  new textViewModel(
      "", 
      "GitHub", 
      "Most of my projects are opensource on GitHub, I love opensource!",
      "true", 
      octocatImg,
      "https://github.com/veeit"),
  new textViewModel(
    "", 
    "Makerlog", 
    "I daily log my work / tasks on makerlog, go check it out!",
    "true", 
    makerlog,
    "https://getmakerlog.com/@veitpro"),
  new textViewModel(
      "", 
      "INEZ", 
      "I started to create a opensource budgetplanner, you can find it on github a webpage for it.",
      "true", 
      INEZ,
      "https://inez.tech"),
  new textViewModel(
      "", 
      "LogBot", 
      "LogBot is a makerlog client for makerlog, it will be relased to the app store soon (SwiftUI has some bugs that need to get fixed before), but is on github",
      "true", 
      logbot,
      "https://github.com/Veeit/makerslog-App"),
  new textViewModel(
    "", 
    "ShopingList", 
    "Shoping List is a eraly version of INEZ, it is a shoping list with AI for macOS and iOS",
    "true", 
    shopinglist,
    "https://github.com/Veeit/ShopingList"),
  new textViewModel(
    "", 
    "Dyslexia is a problem", 
    "This is my swift playground for wwdc 2019, it won. I tried to tell people how it is to live with dyslexia and tried to let them expierance it.",
    "true", 
    dyslexia,
    "https://github.com/Veeit/wwdc-2019-dyslexia_is_a_problem")
  ]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <header className="App-header">
      <div className="background">
      <Ctextview
          key="ww" 
          imgLeft="true"
          img={meImg}
          headline="Veit Progl"
          subheadline="Software developer"
          text="I'm a software developer, Swift Developer, Web Developer, Web and App Deigner, 3D printing Nerd, Maker, IoT Interessted and SwiftUI expert. My goal is it to create things that the user loves. I won a WWDC scholarship in 2019."
          ></Ctextview>
      </div>
    </header>
    <main>
      <div className="main">
      {
        features.map(element => {
          return <div className="background">
            <Ctextview 
          key={element.id} 

          imgLeft={element.imgLeft} 
          img={element.img} 
          headline={element.headline}
          subheadline={element.subheadline}
          text={element.text}
          link={element.link}
          ></Ctextview>
          </div>
        })
      }
      </div>
      <iframe title="Makerlog Embed" height="200" scrolling="no" frameborder="0" allowtransparency="true" src="https://api.getmakerlog.com/users/4300/stats_embed"></iframe>

      </main>
      
  </Layout>
)

export default IndexPage
