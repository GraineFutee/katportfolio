import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";

import SectionHeader from "../components/SectionHeader";
import SectionBody from "../components/SectionBody";

export default function Home() {
  const [resumeIsvisible, setResumeIsvisible] = useState(false);
  return (
    <div>
      <Head>
        <title>StrandbergLegal AB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.section
          animate={{ backgroundSize: ["150%", "100%", "150%"] }}
          transition={{ type: "spring", duration: 80, loop: Infinity }}
          className="hero is-dark is-large"
          style={{
            height: "80vh",
            background: "transparent url(/hero.jpg) center center no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{ backgroundColor: "rgba(30, 39, 46,0.3)", height: "80vh" }}
          >
            <div className="hero-body my-6">
              <div className="container has-text-centered">
                <h1 className="title is-2">StrandbergLegal AB</h1>
                <p className="subtitle">Consultancy firm</p>
              </div>
            </div>
          </div>
        </motion.section>
        <SectionHeader title="About StrandbergLegal" />
        <SectionBody>
          <p className="is-size-4">
            StrandbergLegal is a Stockholm based consultancy firm focusing on
            business law, investments, M&A and commercial law.
          </p>
          <div>
            <div onClick={() => setResumeIsvisible(!resumeIsvisible)}>
              <div className="columns is-mobile">
                <div className="column">
                  <p className="is-size-4">Katarina Strandberg</p>
                </div>
                <div className="column">
                  <p className="is-size-6 my-0 has-text-left">
                    Business lawyer/business development
                  </p>
                  <p className="is-size-7 my-0 has-text-left">
                    <i className="fas fa-phone" /> &nbsp; +46 (0)76 375 03 36
                  </p>
                  <p className="is-size-7 my-0 has-text-left">
                    <i className="fas fa-envelope" /> &nbsp;
                    katarina.strandberg@strandberglegal.se
                  </p>
                </div>
              </div>
              <div className="columns">
                <div className="column is-1"></div>
                <div className="column">
                  <p className="is-size-5">
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
                      height: 450,
                      background:
                        "transparent url(/profil/6.jpg) center center no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div className="column is-1"></div>
              </div>
            </div>
            <motion.div
              style={{ backgroundColor: "#d2dae2" }}
              className="box mt-4"
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={
                resumeIsvisible
                  ? { maxHeight: 2300, opacity: 1 }
                  : { maxHeight: 0, opacity: 0 }
              }
              transition={{ ease: "easeInOut" }}
            >
              <p className="heading is-size-4">experience in selection</p>
              <div className="columns">
                <div className="column">
                  <p className="heading is-size-5">Carrer</p>
                  <div className="content has-text-left">
                    <p className="title is-5">Present</p>
                    <p className="title is-5">2017-nu</p>
                    <ul>
                      <li>
                        StrandbergLegal AB, Business Lawyer & Senior Legal
                        Consultant
                      </li>
                    </ul>
                    <p className="title is-5">2019-nu</p>
                    <ul>
                      <li>The Swedish Villa, CEO, co-founder</li>
                    </ul>
                    <p className="title is-5">Tidigare</p>
                    <ul>
                      <li>PwC Sweden, Senior Manager Financial Services</li>
                      <li>SVCA, Senior Legal Counsel</li>
                      <li>Adminstrative Court of Justice, Tingsnotarie </li>
                      <li>Mannheimer Swartling, biträdande jurist </li>
                      <li>
                        Juristutbildningen, University of Stockholm, Lärare
                        associationsrätt, handledare, examinator och doktorand
                        inom legala strukturer för investeringsfonder{" "}
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
                  <p className="heading is-size-5">Förordnanden</p>
                  <div className="content has-text-left">
                    <p className="title is-5">Nuvarande</p>
                    <ul>
                      <li>
                        International Partner, Sweden i World Business Angel
                        Investment Forum
                      </li>
                      <li>Professional Board Member</li>
                      <li>
                        Member of the Advisory Board för “Impact Track” focus
                        Sustainability, Swedish-American Chamber of Commerce,
                        New York
                      </li>
                      <li>Advisor Venture Capital and Business Angels </li>
                    </ul>
                    <p className="title is-5">Tidigare</p>
                    <ul>
                      <li>Member i Invest Europes regulatoriska grupp</li>
                      <li>Representative vid Svenska Fondföreningen </li>
                      <li>
                        Representative SVCA (drivande i Skatt och Regulatoriska
                        kommitteen)
                      </li>
                      <li>
                        Expert legislative work (En konkurrenskraftig
                        fondlagstiftning), apointed by the Swedish Minister of
                        Markets and Finance Per Bolund
                      </li>
                      <li>
                        Member of the financial Service Group by the Swedish
                        Centre for Commercial Law Stockholms Universitet{" "}
                      </li>
                      <li>
                        Listed as ”2018 Super Talent” within Finance by Veckans
                        Affärer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="is-divider"></div>
              <div className="columns mb-4">
                <div className="column">
                  <p className="heading is-size-5">Utbildning</p>
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
                  <p className="heading is-size-5">Framträdanden i urval</p>
                  <div className="content has-text-left">
                    <ul>
                      <li>
                        Talare Almedalen – Swedish Venture Capital and Private
                        Equity Association
                      </li>
                      <li>
                        Talare Svensk-Amerikanska Handelskammaren i New York{" "}
                      </li>
                      <li>Paneldeltagare, Global Fashioninnovation Talks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <hr className="my-0" />
            <motion.button
              animate={{ rotate: resumeIsvisible ? 180 : 0 }}
              className="button is-rounded is-small is-dark my-1"
              onClick={() => setResumeIsvisible(!resumeIsvisible)}
            >
              <i className="fas fa-sort-down my-0" />
            </motion.button>
          </div>
        </SectionBody>
        <SectionHeader title="Practice areas" />
        <SectionBody>
          <div className="columns">
            <div className="column is-3"></div>
            <div className="column">
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-5">Company law</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-5">Contract law</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-5">Commercial law</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-5">Governance</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-5">Investments</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-5">Incentive programs</p>
                <hr />
              </motion.div>
              <motion.div whileHover={{ scale: 1.75 }}>
                <p className="heading is-size-5">
                  Financial & regulatory (focus investment funds)
                </p>
                <hr />
              </motion.div>
            </div>
            <div className="column is-3"></div>
          </div>
        </SectionBody>
        <SectionHeader title="Bulletin" />
        <SectionBody>
          <motion.div whileHover={{ x: 80 }}>
            <a
              href="/WORLD BUSINESS ANGELS INVESTMENT FORUM.pdf"
              target="_blank"
              className="has-text-dark"
            >
              <p className="heading is-size-5">
                Strandberg was appointed as International Partner representing
                Sweden at World Business Angel Investment Forum
              </p>
              <hr />
            </a>
          </motion.div>
          <motion.div whileHover={{ x: 80 }}>
            <p className="heading is-size-5">
              The Swedish Villa is appointed as Creative Partner to Impact Track
              at the Swedish American Chamber of Commerce New York
            </p>
            <hr />
          </motion.div>
          <motion.div whileHover={{ x: 80 }}>
            <p className="heading is-size-5">
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
              <p className="heading is-size-5">
                Strandberg was appointed as Head of Legal and Regulatory
                Executive Committee under the Ethics and Standards of Excellence
                Committee at World Business Angel Investment Forum
              </p>
              <hr />
            </a>
          </motion.div>
        </SectionBody>
        <SectionHeader title="Contact" />
        <SectionBody>
          <div className="columns">
            <div className="column">
              <div className="content has-text-left">
                <p className="title">
                  Send a message to tell us, ask us and book a metting
                </p>
                <p className="subtitle">
                  Just fill in the form below and we ar good to go
                </p>
              </div>
              <form action="">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <div className="control">
                  <button className="button is-dark is-fullwidth">
                    <i className="fab fa-telegram-plane" /> &nbsp; Send
                  </button>
                </div>
              </form>
            </div>
            <div className="is-divider-vertical"></div>
            <div className="column">
              <div className="content is-size-5 has-text-left">
                <p>
                  We would love to here all about your situation and what
                  oppertunities and what challanges you are facing. In an
                  initial contract we will be able to frame your challanegs, and
                  set the scope. Or, if you have any thoughts or questions, send
                  us a line or two and we will try to enlighten you.
                </p>
                <p>You can also send an email directly to</p>
                <p>katarina.strandberg@strandberglegal.se</p>
                <p>if more convenient.</p>
                <p>Looking forward to hering from you!</p>
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
                <p className="is-size-5 my-0 has-text-left">
                  8901 Marmora Road,
                </p>
                <p className="is-size-5 my-0 has-text-left">
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
                <p className="is-size-5 my-0 has-text-left">
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
                <p className="is-size-5 my-0 has-text-left">
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
