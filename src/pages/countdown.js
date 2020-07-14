import React from "react"
import Countdown from 'react-countdown';  

import Layout from "../components/layout"
import SEO from "../components/seo"

//import "../components/sass/Infinity.sass"
import "../components/sass/Boke-Effect.sass"
import BodyClassName from 'react-body-classname';

const EndeAusbildung = () => <span className="done">Ausbildung ist beendet</span>;

const rendererEndeAusbildung = props => {
  return <span> {props.formatted.days}:{props.formatted.hours}:{props.formatted.minutes}:{props.formatted.seconds}  </span>;
};

const CountdownPage = () => (
  <BodyClassName className="animated-background">

  <Layout>
    <SEO title="Countdown" />
    <div class="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="dataProtection navigation ">
        <div className="countdown">
          <h2>Ausbildungs ende:</h2>
          <Countdown date={Date.parse('15 Jul 2020 13:00:00 GMT')} renderer={ rendererEndeAusbildung}/>
          
        </div>
    </div>
  </Layout>
  </BodyClassName>
)

export default CountdownPage