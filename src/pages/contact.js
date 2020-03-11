import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactImg from "../images/undraw_contact_us_15o2.svg"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="dataProtection navigation">
        <div className="colum2">
          <div>
            <h1>Contact</h1>
            <h2>Quick Contact</h2>
            <p>Telegram: <a href="https://t.me/Veitpro">https://t.me/Veitpro</a></p>
            <br></br>
            <br></br>
            <h2>Social Media</h2>
            <p>Twitter: <a href="https://twitter.com/VoxelVoxels">https://twitter.com/VoxelVoxels</a></p>
            <p>Instagram: <a href="https://www.instagram.com/veit.pro/">https://www.instagram.com/veit.pro/</a></p>
            <br></br>
            <br></br>
            <h2>Business Request</h2>
            <p>E-Mail: <a href= "mailto:mail@veit.dev">mail@veit.dev</a></p>
          </div>
          <div>
            <img src={contactImg}></img>
          </div>
        </div>
      </div>
  </Layout>
)

export default SecondPage
