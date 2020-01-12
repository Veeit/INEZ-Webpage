import React from 'react';
import logo from './logo.svg';
import Cnavigation from './View/Navigation';
import Ctextview from './View/Ctextview';
import CthreeText from './View/CthreeText';
import Cfooter from './View/footer'

import dashbaordImg from './View/img/dashboard.png'
import budgetImg from './View/img/budget.png'
import projectImg from './View/img/project.png'
import statisticsImg from './View/img/statistics.png'


const uuidv4 = require('uuid/v4');

function textViewModel(headline, subheadline, text, imgLeft, img) {
  this.headline = headline;
  this.subheadline = subheadline;
  this.text = text;
  this.imgLeft = imgLeft;
  this.img = img;
  this.id = String(uuidv4())
}

function App() {
  console.log(logo)

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
        "false", 
        projectImg),
    new textViewModel(
        "", 
        "Understand your expenses", 
        "INEZ has easy to understand statisks so you can finaly understand your expenses. There is no limit in history so you can see all of your improvements.",
        "true", 
        statisticsImg)
    ]

  return (
    <div className="App">
      <Cnavigation></Cnavigation>
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
        <iframe title="Makerlog Embed" height="200" scrolling="no" frameborder="0" allowtransparency="true" src="https://api.getmakerlog.com/users/4300/stats_embed"></iframe>

      </main>
      <footer>
        <Cfooter></Cfooter>
      </footer>
    </div>
  );
}

export default App;
