import Head from "next/head";
import React from "react";

import Home from "../components/Home";
import About from "../components/About";
import Areas from "../components/Areas";
import Bulletin from "../components/Bulletin";
import Articles from "../components/Articles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Website() {
  let meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content = "width=device-width,initial-scale=1.0";
  document.getElementsByTagName("head")[0].appendChild(meta);

  return (
    <div>
      <Head>
        <title>StrandbergLegal AB</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <Home />
        <About />
        <Areas />
        <Bulletin />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
