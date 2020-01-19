import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="imprint navigation">
          <main>
              <div>
                <h1>Impressum</h1>
                <br />
                <p>
                Verantwortlich für den Inhalt dieser Webseite:<br />
                Veit Progl<br /><br />

                Telefon: +49 (0) 15678 / 522621<br /><br /> 

                <a href="mailto: mail@veit.dev">mail@veit.dev</a><br /><br />

                Postanschrift:<br />
                Veit Progl<br />
                41564 Kaarst<br />
                Maximilan-Kolbe-Str. 7 <br/>
                </p>
            </div>
          </main>
        </div>
  </Layout>
)

export default SecondPage
