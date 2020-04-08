import React from "react"
import Countdown from 'react-countdown';  

import Layout from "../components/layout"
import SEO from "../components/seo"

const EndeAusbildung = () => <span>Ausbildung ist beendet</span>;

const rendererEndeAusbildung = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <EndeAusbildung />;
  } else {
    // Render a countdown
  return <span>{days}:{hours}:{minutes}:{seconds}</span>;
  }
};

const SchriftlichePrueftung = () => <span>Schriftlicheprüfung ist geschrieben</span>;

const rendererSchriftlichePrueftung = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <SchriftlichePrueftung />;
  } else {
    // Render a countdown
  return <span>{days}:{hours}:{minutes}:{seconds}</span>;
  }
};

const CountdownPage = () => (
  <Layout>
    <SEO title="Datenschutzerklaerung" />
    <div className="dataProtection navigation">
        <div className="countdown">
          <h2>Ausbildungs ende:</h2>
          <Countdown date={Date.parse('31 Jul 2020 18:00:00 GMT')} renderer={rendererEndeAusbildung} />
        </div>
        <div className="countdown">
          <h2>Schriftliche Prüfung:</h2>
          <Countdown date={Date.parse('18 Jun 2020 18:00:00 GMT')} renderer={rendererSchriftlichePrueftung} />
        </div>
        <div className="countdown">
          <h2>Abgabe der Doku:</h2>
          <Countdown date={Date.parse('04 May 2020 23:50:00 GMT')} renderer={rendererSchriftlichePrueftung} />
        </div>
    </div>
  </Layout>
)

export default CountdownPage