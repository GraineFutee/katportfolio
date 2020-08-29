import Head from "next/head";
import { motion } from "framer-motion";

import SectionHeader from "../components/SectionHeader";
import SectionBody from "../components/SectionBody";

export default function Home() {
  return (
    <div>
      <Head>
        <title>katarina Strandberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.section
          animate={{ backgroundSize: ["120%", "100%", "120%"] }}
          transition={{ type: "spring", duration: 40, loop: Infinity }}
          className="hero is-large is-dark"
          style={{
            background: "transparent url(/hero.jpg) center center no-repeat",
            backgroundSize: "100%",
            backgroundAttachment: "fixed",
          }}
        >
          <div style={{ backgroundColor: "rgba(30, 39, 46,0.3)" }}>
            <div className="hero-body my-6">
              <div className="container has-text-centered">
                <h1 className="title is-1">StrandbergLegal AB</h1>
                <p className="subtitle">something relevant</p>
              </div>
            </div>
          </div>
        </motion.section>
        <SectionHeader title="About StrandbergLegal" />
        <SectionBody>
          <p className="is-size-5">
            StrandbergLegal is a Stockholm based consultancy firm focusing on
            business law, investments, M&A and commercial law.
          </p>
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
            <p className="heading is-size-5">
              Strandberg was appointed as International Partner representing
              Sweden at World Business Angel Investment Forum
            </p>
            <hr />
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
            <p className="heading is-size-5">
              Strandberg was appointed as Head of Legal and Regulatory Executive
              Committee under the Ethics and Standards of Excellence Committee
              at World Business Angel Investment Forum
            </p>
            <hr />
          </motion.div>
        </SectionBody>
      </main>

      <footer></footer>
    </div>
  );
}
