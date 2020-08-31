import React from "react";

export default function Footer() {
  return (
    <footer className="hero is-dark">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-mobile">
            <div className="column">
              <p className="is-size-3 my-0 has-text-right">
                <i className="fas fa-map-marker-alt" />
              </p>
            </div>
            <div className="is-divider-vertical"></div>
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
            <div className="is-divider-vertical"></div>
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
            <div className="is-divider-vertical"></div>
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
          <p className="is-size-6 my-0">&#169; &nbsp; StrandbergLegal AB</p>
          <p className="is-size-6">
            <small>
              Made by{" "}
              <a
                href="https://hopeful-liskov-a6991c.netlify.app/"
                target="_blank"
                className="has-text-white"
              >
                Pierre ASDRUBAL
              </a>{" "}
              /{" "}
              <a
                href="https://www.theswedishvilla.com/"
                target="_blank"
                className="has-text-white"
              >
                The Swedish Vila
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}
