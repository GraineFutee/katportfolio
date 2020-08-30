import Head from "next/head";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import SectionHeader from "../components/SectionHeader";
import SectionBody from "../components/SectionBody";
import DropDownArea from "../components/DropDownArea";

export default function Home() {
  const [resumeIsvisible, setResumeIsvisible] = useState(false);
  const [visibleArea, setVisibleArea] = useState("");
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
              backgroundAttachment: "fixed",
              zIndex: 3,
            }}
          ></motion.div>
          <div
            style={{
              marginTop: "-80vh",
              height: "80vh",
              background: `transparent url(/bg/${bg2}.jpg) center center no-repeat`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
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
                {/* <a
                  className="navbar-item is-size-6"
                  href="#artciles"
                  onClick={() => setBurgerActive(!burgerActive)}
                >
                  Articles
                </a> */}
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
                <p className="subtitle">Legal Consultancy Firm</p>
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
                        <p className="title is-6">Previous</p>
                        <ul>
                          <li>PwC Sweden, Senior Manager Financial Services</li>
                          <li>SVCA, Senior Legal Counsel</li>
                          <li>Adminstrative Court of Justice, Law Clerk </li>
                          <li>Mannheimer Swartling</li>
                          <li>
                            Law School, Stockholm University, Teacher company
                            law, mentor, responsible for examinations
                          </li>
                          <li>
                            Law School, Uppsala University, Lecturer Financial
                            regulation
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="is-divider-vertical"></div>
                    <div className="column">
                      <p className="heading is-size-6">Appointments</p>
                      <div className="content has-text-left">
                        <p className="title is-6">Present</p>
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
                        <p className="title is-6">Previous</p>
                        <ul>
                          <li>Member Invest Europes regulatoriska grupp</li>
                          <li>Representative at Svenska Fondföreningen </li>
                          <li>Representative SVCA (Tax and Regulatory)</li>
                          <li>
                            Expert legislative work (En konkurrenskraftig
                            fondlagstiftning), appointed by the Swedish Minister
                            of Markets and Finance Per Bolund
                          </li>
                          <li>
                            Member of the Financial Service Group by the Swedish
                            Centre for Commercial Law Stockholms Universitet
                          </li>
                          <li>
                            Listed as ”Super Talent” 2018 within Finance by
                            Swedish business magazine Veckans Affärer
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="is-divider"></div>
                  <div className="columns mb-4">
                    <div className="column">
                      <p className="heading is-size-6">Education</p>
                      <div className="content has-text-left">
                        <ul>
                          <li>Jur. kand., Stockholms Universitet </li>
                          <li>
                            Research student, Juristutbildningen Stockholms
                            univeristet
                          </li>
                          <li>Ad hoc courses in Psychology and finance</li>
                          <li>Education personal trainer </li>
                        </ul>
                      </div>
                    </div>
                    <div className="is-divider-vertical"></div>
                    <div className="column">
                      <p className="heading is-size-6">
                        Some other preformances
                      </p>
                      <div className="content has-text-left">
                        <ul>
                          <li>
                            Speaker Almedalen – Swedish Venture Capital and
                            Private Equity Association
                          </li>
                          <li>
                            Speaker Svensk-Amerikanska Handelskammaren i New
                            York
                          </li>
                          <li>
                            Speaker in panel, Global Fashioninnovation Talks
                            2020
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
              <DropDownArea
                title="Company law"
                setVisibleArea={setVisibleArea}
                visibleArea={visibleArea}
              >
                <p className="has-text-left" style={{ zIndex: 3 }}>
                  Incorporation and registration, corporate governance including
                  Board matters, as well as restructuring, new share issuing,
                  constructing and negotiating Shareholders Agreements.
                </p>
              </DropDownArea>
              <DropDownArea
                title="Contract law"
                setVisibleArea={setVisibleArea}
                visibleArea={visibleArea}
              >
                <p className="has-text-left" style={{ zIndex: 3 }}>
                  Producing and negotiation of contracts, reviewing and
                  assessing contract suggestions.
                </p>
              </DropDownArea>
              <DropDownArea
                title="Commercial law"
                setVisibleArea={setVisibleArea}
                visibleArea={visibleArea}
              >
                <p className="has-text-left" style={{ zIndex: 3 }}>
                  Structuring and overseeing transactions between businesses,
                  including matters such as advertising and marketing,
                  collections, banking, contracts, negotiable instruments, and
                  trade in general.
                </p>
              </DropDownArea>
              <DropDownArea
                title="Governance"
                setVisibleArea={setVisibleArea}
                visibleArea={visibleArea}
              >
                <p className="has-text-left" style={{ zIndex: 3 }}>
                  Board work, strategic matters, work shops and education,
                  policy documents and implementation of such.
                </p>
              </DropDownArea>
              <DropDownArea
                title="Investments"
                setVisibleArea={setVisibleArea}
                visibleArea={visibleArea}
              >
                <p className="has-text-left" style={{ zIndex: 3 }}>
                  Structuring and overseeing investment rounds, facilitating and
                  leading investments and managing deal flow and evaluations of
                  investment memorandums.
                </p>
              </DropDownArea>
              <DropDownArea
                title="Incentive programs"
                setVisibleArea={setVisibleArea}
                visibleArea={visibleArea}
              >
                <p className="has-text-left" style={{ zIndex: 3 }}>
                  Management incentive programs, short- and long term, including
                  Stock options, Employee stock options and sweat equity deals.
                  Structuring of KPI:s also in relation to regulated operations
                  within Financial Services.
                </p>
              </DropDownArea>
              <DropDownArea
                title="Financial & Regulatory"
                setVisibleArea={setVisibleArea}
                visibleArea={visibleArea}
              >
                <p className="has-text-left" style={{ zIndex: 3 }}>
                  Regulatory and governance issues related to UCITS and AIFMD
                  regulated operations, also in relation to AML regulation and
                  general correspondence and reporting in relation to the
                  Swedish Financial Authorities and ESMA.
                </p>
              </DropDownArea>
            </div>
            <div className="column is-3"></div>
          </div>
        </SectionBody>
        <SectionHeader title="Bulletin" id="bulletin" />
        <SectionBody>
          <motion.div whileHover={{ x: 80 }}>
            <a
              href="https://poddtoppen.se/podcast/1161496999/lunchpodden-min-basta-ide/min-basta-ide-leila-falkenberg-och-katarina-strandberg-om-varfor-svenska-kreatorer-ager"
              target="_blank"
              className="has-text-dark"
            >
              <p className="heading is-size-6">
                Co-founders Leila Falkenberg & Katarina Strandberg was invited
                as guests in Lunch-podden
              </p>
              <hr />
            </a>
          </motion.div>
          <motion.div whileHover={{ x: 80 }}>
            <a
              href="https://www.ecruboxdigital.com/"
              target="_blank"
              className="has-text-dark"
            >
              <p className="heading is-size-6">
                Strandberg was invited as expert to give her view of the future
                of the fashion/retail market for a UK market-research
              </p>
              <hr />
            </a>
          </motion.div>
          <motion.div whileHover={{ x: 80 }}>
            <a
              href="https://www.wbaforum.org/"
              target="_blank"
              className="has-text-dark"
            >
              <p className="heading is-size-6">
                Strandberg to participate in the WBAF world congress in Istanbul
              </p>
              <hr />
            </a>
          </motion.div>
          <motion.div whileHover={{ x: 80 }}>
            <a
              href="https://www.saccny.org/sustainology/"
              target="_blank"
              className="has-text-dark"
            >
              <p className="heading is-size-6">
                Strandberg speaks on behalf of Social Entrepreneurship Forum at
                Swedish-American Chamber of commerce Sustainology about the
                connection between Sustanability in the food industry and
                investments/profits
              </p>
              <hr />
            </a>
          </motion.div>
          <motion.div whileHover={{ x: 80 }}>
            <a
              href="https://www.saccny.org/2020/02/12/saccny-ramps-up-its-sustainability-focus-with-impact-track-2020/"
              target="_blank"
              className="has-text-dark"
            >
              <p className="heading is-size-6">
                Strandberg was appointed as Advisory Board Member for the Impact
                track Swedish-American Chamber of Commerce New York
              </p>
              <hr />
            </a>
          </motion.div>
        </SectionBody>
        {/* <SectionHeader title="Articles" id="artciles" />
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
                  We would love to here from you, what your situation is, as
                  well as what opportunities and challenges you are facing. Or,
                  if you have any thoughts or questions, send us a line or two
                  and we get back to you within short.
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
        </SectionBody> */}
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
                  We would love to here from you, what your situation is, as
                  well as what opportunities and challenges you are facing. Or,
                  if you have any thoughts or questions, send us a line or two
                  and we get back to you within short.
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
                <p className="is-size-6 my-0 has-text-left">Danderydsgatan,</p>
                <p className="is-size-6 my-0 has-text-left">
                  28 114 26 Stockholm
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
