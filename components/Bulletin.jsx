import React from "react";
import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";

export default function Bulletin() {
  return (
    <>
      <SectionHeader title="Bulletin" id="bulletin" />
      <SectionBody>
        <motion.div whileHover={{ x: 80 }}>
          <a
            href="https://poddtoppen.se/podcast/1161496999/lunchpodden-min-basta-ide/min-basta-ide-leila-falkenberg-och-katarina-strandberg-om-varfor-svenska-kreatorer-ager"
            target="_blank"
            className="has-text-dark"
          >
            <p className="heading is-size-6">
              Co-founders Leila Falkenberg & Katarina Strandberg was invited as
              guests in Lunch-podden
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
              Strandberg was invited as expert to give her view of the future of
              the fashion/retail market for a UK market-research
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
    </>
  );
}
