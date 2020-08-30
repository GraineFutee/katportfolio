import React, { useState } from "react";
import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";

export default function About() {
  const [resumeIsvisible, setResumeIsvisible] = useState(false);

  return (
    <>
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
                      <i className="fas fa-phone" /> &nbsp; +46 (0)76 375 03 36
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
                  Business lawyer specialized in Business Development, Corporate
                  Governance, Fundraising and Mergers & Acquisitions,
                  Investments and Management Incentives. Advisor to Start-Ups,
                  Venture Capitalists and managements. Experience also includes
                  being appointed as expert in legislative work under the
                  Swedish Minister of Financial Markets and having lecturing
                  assignments at Swedish universities, as well as international
                  assignments for e.g. the Swedish-American Chamber of Commerce
                  in New York. Katarina also serves as board member on formal
                  boards and advisory boards and functions as CEO at The Swedish
                  Villa.
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
            initial={{ maxHeight: 0, overflow: "hidden" }}
            animate={resumeIsvisible ? { maxHeight: 2300 } : { maxHeight: 0 }}
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
                          Law School, Stockholm University, Teacher company law,
                          mentor, responsible for examinations
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
                          Member of the Advisory Board för “Impact Track” focus
                          Sustainability, Swedish-American Chamber of Commerce,
                          New York
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
                    <p className="heading is-size-6">Some other preformances</p>
                    <div className="content has-text-left">
                      <ul>
                        <li>
                          Speaker Almedalen – Swedish Venture Capital and
                          Private Equity Association
                        </li>
                        <li>
                          Speaker Svensk-Amerikanska Handelskammaren i New York
                        </li>
                        <li>
                          Speaker in panel, Global Fashioninnovation Talks 2020
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
    </>
  );
}
