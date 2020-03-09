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
  "INEZ", 
  "the new kind of budget planner", 
  "INEZ has been developed with a completely new approach to the ideal planning of your budget",
  "false", 
  dashbaordImg)

const features = [
  new textViewModel(
      "", 
      "Add a Budget", 
      "Controll your money with Budgets, you can add unlimited budgets inside each other and plan your expenses precisely.",
      "true", 
      budgetImg),
  new textViewModel(
      "", 
      "Add a Project", 
      "Plan your taks with a project. A project is like to do list. You can add your taks and products. Add a sub project or budget. Make it yours",
      "true", 
      projectImg),
  new textViewModel(
      "", 
      "Understand your expenses", 
      "INEZ has easy to understand statisks so you can finaly understand your expenses. There is no limit in history so you can see all of your improvements.",
      "true", 
      statisticsImg)
  ]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <header className="App-header">
      <div className="background">
      <Ctextview
          key="ww" 
          imgLeft="true"
          img="https://veit.dev/img/veit.4d1aeb48.png"
          headline="Veit Progl"
          subheadline="Software developer"
          text="I'm a software developer, Swift Developer, Web Developer, Web and App Deigner, 3D printing Nerd, Maker, IoT Interessted and SwiftUI expert. My goal is it to create things that the user loves."
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
