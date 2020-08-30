import Head from "next/head";
import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

export default function Website() {
  useEffect(() => {
    let meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width,initial-scale=1.0";
    document.getElementsByTagName("head")[0].appendChild(meta);
  }, []);

  return (
    <div>
      <Head>
        <title>StrandbergLegal AB</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <Navbar />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
