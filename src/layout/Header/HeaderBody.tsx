import React from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

function HeaderBody() {
  return (
    <div className="header_body">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col lg={12} md={24}>
            <div className="left">
              <Fade>
                <Link to="/">
                  <figure>
                    <img className="site_logo_img" src="https://karantin.uz/assets/public/images/logo.svg" alt="karantin agentligi" />
                  </figure>
                  <h2 className="site_title">
                    O'ZBEKISTON RESPUBLIKASI
                    <br />
                    O'SIMLIKLAR KARANTINI VA HIMOYASI
                    <br />
                    AGENTLIGI
                  </h2>
                </Link>
              </Fade>
            </div>
          </Col>
          <Col lg={12} md={24}>
            <div className="right">
              <Row gutter={[16, 16]}>
                <Col md={12} sm={24}>
                  <div className="fax">
                    <a href="#">
                      <i className="fa-solid fa-map-location-dot"></i>
                      <p className="fax_text">
                        Bizning manzil: <br />
                        100100, Toshkent sh., <br />
                        "Bobur" 1-berk ko'chasi, 17-uy <br />
                        <a href="mailto:info@karantin.uz">
                          Elektron manzil: info@karantin.uz
                        </a>
                      </p>
                    </a>
                  </div>
                </Col>
                <Col md={12} sm={24}>
                  <div className="phone">
                    <div className="phone_top">
                      <div>
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <p className="phone_body">
                        <span className="tel_text">Ishonch telefoni</span> <br />
                        <a className="phone_url" href="tel:+998712028484">
                          (+99871)
                          <span className="tel_number">
                            202 84 84
                          </span>
                        </a>
                      </p>
                    </div>
                    <div className="phone_top bottom">
                      <div>
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <p className="phone_body">
                        <span className="tel_text">Call markaz</span> <br />
                        <a href="tel:1288" className="tel_number">
                          1288,
                        </a>
                        <a className="phone_url" href="tel:+998712028484">
                          (+99871)
                          <span className="tel_number">
                            202 84 84
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

        </Row>
      </div>
    </div>
  )
}

export default HeaderBody