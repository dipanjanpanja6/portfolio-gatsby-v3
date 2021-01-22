import React from "react"
import Img from "gatsby-image"
import useInstagram from "../hooks/use-instagram"
import Heart from "./heart"
import "./edu.css"

const Experience = () => {

  return (
    <div className="root">


      <div className="pv-profile-section">

        <a href="http://gcect.ac.in" className="ember-view">
          <div className="pv-entity__logo">
            <img src="https://media-exp1.licdn.com/dms/image/C510BAQFydmn4J0k8gA/company-logo_100_100/0/1560079981088?e=1619049600&amp;v=beta&amp;t=VI1a7K5zbUt0YC5teADgdHqDQW95pNNXgpsRSktxTFY" loading="lazy" alt="Government College Of Engineering and Ceramic Technology" className="pv-entity__logo" />
          </div>

          <div className="pv-entity__summary-info">
            <div className="pv-entity__degree-info">
              <h3 className="pv-entity__school-name t-16 t-black t-bold">Government College Of Engineering and Ceramic Technology</h3>

              <p className="pv-entity__secondary-title">
                Bachelor of Technology, Computer Science and Engineering</p>
            </div>

            <p className="pv-entity__dates">
              <time>2017</time> – <time>2021</time>
            </p>

          </div>

        </a>
      </div>
    </div>
  )
}

export default Experience
