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
  return (
    <div>
      <Head>
        <title>StrandbergLegal AB</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
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
