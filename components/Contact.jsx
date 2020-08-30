import React from "react";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";

export default function Contact() {
  return (
    <>
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
                We would love to here from you, what your situation is, as well
                as what opportunities and challenges you are facing. Or, if you
                have any thoughts or questions, send us a line or two and we get
                back to you within short.
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
    </>
  );
}
