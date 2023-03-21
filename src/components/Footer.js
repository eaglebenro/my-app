import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa"
import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>2625 Valmont Rd</p>
              <p>Unit 3A</p>
              <p>Boulder, CO 80304</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              303-385-3665
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              eaglebenro@gmail.com
            </h4>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  )
}

export default Footer
