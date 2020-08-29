import Head from "next/head";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import SectionHeader from "../components/SectionHeader";
import SectionBody from "../components/SectionBody";

export default function Home() {
  const [resumeIsvisible, setResumeIsvisible] = useState(false);
  const [bg, setBg] = useState(1);
  const [bg2, setBg2] = useState(2);
  const [activeBg, setActiveBg] = useState(1);
  const [burgerActive, setBurgerActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg(activeBg * -1);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [activeBg]);

  return (
    <div>
      <Head>
        <title>StrandbergLegal AB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.section
          id="home"
          // animate={{ backgroundSize: ["120%", "100%", "120%"] }}
          // transition={{ type: "spring", duration: 80, loop: Infinity }}
          className="hero is-dark is-large"
          // style={{
          //   height: "80vh",
          //   background: "transparent url(/hero.jpg) center center no-repeat",
          //   backgroundSize: "cover",
          // }}
        >
          <motion.div
            animate={{ opacity: activeBg > 0 ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{
              height: "80vh",
              background: `transparent url(/bg/${bg}.jpg) center center no-repeat`,
              backgroundSize: "cover",
              zIndex: 3,
            }}
          ></motion.div>
          <div
            style={{
              marginTop: "-80vh",
              height: "80vh",
              background: `transparent url(/bg/${bg2}.jpg) center center no-repeat`,
              backgroundSize: "cover",
              zIndex: 2,
            }}
          ></div>
          <div
            style={{
              backgroundColor: "rgba(30, 39, 46,0.3)",
              height: "80vh",
              zIndex: 10,
            }}
            className="is-overlay"
          >
            <nav
              className="navbar is-fixed-top"
              style={{ backgroundColor: "rgba(30, 39, 46,0.5)" }}
            >
              <div className="navbar-brand">
                <a className="navbar-item is-size-6" href="#home">
                  StrandbergLegal
                </a>

                <a
                  role="button"
                  className={`navbar-burger burger has-text-white ${
                    burgerActive && "is-active"
                  }`}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="StranbergLegalNavbar"
                  onClick={() => setBurgerActive(!burgerActive)}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div
                id="StranbergLegalNavbar"
                className={`navbar-menu ${burgerActive && "is-active"}`}
              >
                <a
                  className="navbar-item is-size-6"
                  href="#about"
                  onClick={() => setBurgerActive(!burgerActive)}
                >
                  About
                </a>
                <a
                  className="navbar-item is-size-6"
                  href="#areas"
                  onClick={() => setBurgerActive(!burgerActive)}
                >
                  Practice areas
                </a>
                <a
                  className="navbar-item is-size-6"
                  href="#bulletin"
                  onClick={() => setBurgerActive(!burgerActive)}
                >
                  Bulletin
                </a>
                <a
                  className="navbar-item is-size-6"
                  href="#contact"
                  onClick={() => setBurgerActive(!burgerActive)}
                >
                  Contact
                </a>
              </div>
            </nav>
            <div className="hero-body my-6">
              <motion.div
                className="container has-text-centered"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <h1 className="title is-2">StrandbergLegal AB</h1>
                <p className="subtitle">Consultancy firm</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <SectionHeader title="About StrandbergLegal" id="about" />
        <SectionBody>
          <p className="is-size-5">
            StrandbergLegal is a Stockholm based consultancy firm focusing on
            business law, investments, M&A and commercial law.
          </p>
          <hr />
          <div>
            <div onClick={() => setResumeIsvisible(!resumeIsvisible)}>
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <div className="columns">
                    <div className="column">
                      <p className="is-size-5">Katarina Strandberg</p>
                    </div>
                    <div className="column">
                      <p className="is-size-6 my-0 has-text-left">
                        Business lawyer/business development
                      </p>
                      <p className="is-size-7 my-0 has-text-left">
                        <i className="fas fa-phone" /> &nbsp; +46
                        (0)76 375 03 36
                      </p>
                      <p className="is-size-7 my-0 has-text-left">
                        <i className="fas fa-envelope" /> &nbsp;
                        katarina.strandberg@strandberglegal.se
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-2"></div>
                <div className="column">
                  <p className="is-size-6 has-text-left">
                    Business lawyer specialized in Business Development,
                    Corporate Governance, Fundraising and Mergers &
                    Acquisitions, Investments and Management Incentives. Advisor
                    to Start-Ups, Venture Capitalists and managements.
                    Experience also includes being appointed as expert in
                    legislative work under the Swedish Minister of Financial
                    Markets and having lecturing assignments at Swedish
                    universities, as well as international assignments for e.g.
                    the Swedish-American Chamber of Commerce in New York.
                    Katarina also serves as board member on formal boards and
                    advisory boards and functions as CEO at The Swedish Villa.
                  </p>
                </div>
                <div className="is-divider-vertical"></div>
                <div className="column">
                  <div
                    className="box"
                    style={{
                      height: 350,
                      background:
                        "transparent url(/profil/6bw.jpg) center center no-repeat",
                      backgroundSize: "cover",
                      borderRadius: 0,
                    }}
                  ></div>
                </div>
                <div className="column is-2"></div>
              </div>
            </div>
            <motion.div
              className="mt-4"
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={
                resumeIsvisible
                  ? { maxHeight: 2300, opacity: 1 }
                  : { maxHeight: 0, opacity: 0 }
              }
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <div className="columns">
                <div className="column is-1"></div>
                <div className="column" style={{ backgroundColor: "#dcdde1" }}>
                  <p className="heading is-size-5">experience in selection</p>
                  <div className="columns">
                    <div className="column">
                      <p className="heading is-size-6">Carrer</p>
                      <div className="content has-text-left">
                        <p className="title is-6">Present</p>
                        <p className="title is-6">2017-nu</p>
                        <ul>
                          <li>
                            StrandbergLegal AB, Business Lawyer & Senior Legal
                            Consultant
                          </li>
                        </ul>
                        <p className="title is-6">2019-nu</p>
                        <ul>
                          <li>The Swedish Villa, CEO, co-founder</li>
                        </ul>
                        <p className="title is-6">Tidigare</p>
                        <ul>
                          <li>PwC Sweden, Senior Manager Financial Services</li>
                          <li>SVCA, Senior Legal Counsel</li>
                          <li>Adminstrative Court of Justice, Tingsnotarie </li>
                          <li>Mannheimer Swartling, biträdande jurist </li>
                          <li>
                            Juristutbildningen, University of Stockholm, Lärare
                            associationsrätt, handledare, examinator och
                            doktorand inom legala strukturer för
                            investeringsfonder{" "}
                          </li>
                          <li>
                            Juristutbildningen, Uppsala University, Föreläsare
                            finansrätt
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="is-divider-vertical"></div>
                    <div className="column">
                      <p className="heading is-size-6">Förordnanden</p>
                      <div className="content has-text-left">
                        <p className="title is-6">Nuvarande</p>
                        <ul>
                          <li>
                            International Partner, Sweden i World Business Angel
                            Investment Forum
                          </li>
                          <li>Professional Board Member</li>
                          <li>
                            Member of the Advisory Board för “Impact Track”
                            focus Sustainability, Swedish-American Chamber of
                            Commerce, New York
                          </li>
                          <li>Advisor Venture Capital and Business Angels </li>
                        </ul>
                        <p className="title is-6">Tidigare</p>
                        <ul>
                          <li>Member i Invest Europes regulatoriska grupp</li>
                          <li>Representative vid Svenska Fondföreningen </li>
                          <li>
                            Representative SVCA (drivande i Skatt och
                            Regulatoriska kommitteen)
                          </li>
                          <li>
                            Expert legislative work (En konkurrenskraftig
                            fondlagstiftning), apointed by the Swedish Minister
                            of Markets and Finance Per Bolund
                          </li>
                          <li>
                            Member of the financial Service Group by the Swedish
                            Centre for Commercial Law Stockholms Universitet{" "}
                          </li>
                          <li>
                            Listed as ”2018 Super Talent” within Finance by
                            Veckans Affärer
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="is-divider"></div>
                  <div className="columns mb-4">
                    <div className="column">
                      <p className="heading is-size-6">Utbildning</p>
                      <div className="content has-text-left">
                        <ul>
                          <li>Jur. kand., Stockholms Universitet </li>
                          <li>
                            Research student, Juristutbildningen Stockholms
                            univeristet
                          </li>
                          <li>Ad hoc courses in Psychology and finance</li>
                        </ul>
                      </div>
                    </div>
                    <div className="is-divider-vertical"></div>
                    <div className="column">
                      <p className="heading is-size-6">Framträdanden i urval</p>
                      <div className="content has-text-left">
                        <ul>
                          <li>
                            Talare Almedalen – Swedish Venture Capital and
                            Private Equity Association
                          </li>
                          <li>
                            Talare Svensk-Amerikanska Handelskammaren i New York{" "}
                          </li>
                          <li>
                            Paneldeltagare, Global Fashioninnovation Talks
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-1"></div>
              </div>
            </motion.div>

            <hr className="my-0" />
            <button
              className="button is-rounded is-small is-dark my-1"
              onClick={() => setResumeIsvisible(!resumeIsvisible)}
            >
              <p>
                More &nbsp;
                <motion.i
                  animate={{ rotate: resumeIsvisible ? 180 : 0 }}
                  className="fas fa-sort-down my-0"
                />
              </p>
            </button>
          </div>
        </SectionBody>
        <SectionHeader title="Practice areas" id="areas" />
        <SectionBody bg="/bg/3.jpg">
          <div className="columns">
            <div className="column is-3"></div>
            <div className="column">
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-6">Company law</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-6">Contract law</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-6">Commercial law</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-6">Governance</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-6">Investments</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-6">Incentive programs</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-6">
                  Financial & regulatory (focus investment funds)
                </p>
                <hr />
              </motion.div>
            </div>
            <div className="column is-3"></div>
          </div>
        </SectionBody>
        <SectionHeader title="Bulletin" id="bulletin" />
        <SectionBody>
          <motion.div whileHover={{ x: 80 }}>
            <a
              href="/WORLD BUSINESS ANGELS INVESTMENT FORUM.pdf"
              target="_blank"
              className="has-text-dark"
            >
              <p className="heading is-size-6">
                Strandberg was appointed as International Partner representing
                Sweden at World Business Angel Investment Forum
              </p>
              <hr />
            </a>
          </motion.div>
          <motion.div whileHover={{ x: 80 }}>
            <p className="heading is-size-6">
              The Swedish Villa is appointed as Creative Partner to Impact Track
              at the Swedish American Chamber of Commerce New York
            </p>
            <hr />
          </motion.div>
          <motion.div whileHover={{ x: 80 }}>
            <p className="heading is-size-6">
              Strandberg was requested to become columnist at Swedens largest
              trade journal for the FMCG/the food industry Butikstrender
            </p>
            <hr />
          </motion.div>
          <motion.div whileHover={{ x: 80 }}>
            <a
              href="/Ethical Response of WBAF to COVID-19.pdf"
              target="_blank"
              className="has-text-dark"
            >
              <p className="heading is-size-6">
                Strandberg was appointed as Head of Legal and Regulatory
                Executive Committee under the Ethics and Standards of Excellence
                Committee at World Business Angel Investment Forum
              </p>
              <hr />
            </a>
          </motion.div>
        </SectionBody>
        <SectionHeader title="Contact" id="contact" />
        <SectionBody>
          <div className="columns">
            <div className="column">
              <div className="content has-text-left">
                <p className="title is-4">
                  Send a message to tell us about you and book a metting
                </p>
                <p className="subtitle is-6">
                  Just fill in the form below and we are good to go
                </p>
              </div>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="mt-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="field">
                  <div className="control">
                    <input
                      name="name"
                      id="name"
                      className="input"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      name="email"
                      id="email"
                      className="input"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <textarea
                      name="message"
                      id="message"
                      className="textarea"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <div className="control">
                  <button type="submit" className="button is-dark is-fullwidth">
                    <i className="fab fa-telegram-plane" /> &nbsp; Send
                  </button>
                </div>
              </form>
            </div>
            <div className="is-divider-vertical"></div>
            <div className="column">
              <div className="content is-size-6 has-text-left">
                <p>
                  We would love to here all about your situation and what
                  oppertunities and challenges you are facing. In an initial
                  contract we will be able to frame your challenges, and set the
                  scope. Or, if you have any thoughts or questions, send us a
                  line or two and we will try to enlighten you.
                </p>
                <p>You can also send an email directly if more convenient.</p>
                <p>Looking forward to hering from you!</p>
                <div
                  className="box"
                  style={{
                    height: 300,
                    background:
                      "transparent url(/contact.jpg) center center no-repeat",
                    backgroundSize: "cover",
                    borderRadius: 0,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </SectionBody>
      </main>

      <footer className="hero is-dark">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-mobile">
              <div className="column">
                <p className="is-size-3 my-0 has-text-right">
                  <i className="fas fa-map-marker-alt" />
                </p>
              </div>
              <div className="column is-9-mobile is-6-tablet">
                <p className="is-size-6 my-0 has-text-left">
                  8901 Marmora Road,
                </p>
                <p className="is-size-6 my-0 has-text-left">
                  Glasgow, D04 89GR
                </p>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <p className="is-size-3 my-0 has-text-right">
                  <i className="fas fa-phone" />
                </p>
              </div>
              <div className="column is-9-mobile is-6-tablet">
                <p className="is-size-6 my-0 has-text-left">
                  +46 (0)76 375 03 36
                </p>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <p className="is-size-3 my-0 has-text-right">
                  <i className="fas fa-envelope" />
                </p>
              </div>
              <div className="column is-9-mobile is-6-tablet">
                <p className="is-size-6 my-0 has-text-left">
                  katarina.strandberg@ strandberglegal.se
                </p>
              </div>
            </div>
            <hr />
            <p className="is-size-3 my-0">
              <a
                href="https://www.instagram.com/strandbergkatarina/"
                target="_blank"
                className="has-text-white"
              >
                <i className="fab fa-instagram" />
              </a>
              &nbsp; &nbsp;
              <a
                href="https://se.linkedin.com/in/katarina-strandberg-75ab16129"
                target="_blank"
                className="has-text-white"
              >
                <i className="fab fa-linkedin" />
              </a>
            </p>
            <p className="is-size-6 my-0">&#169; &nbsp; Katarina Strandberg</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
