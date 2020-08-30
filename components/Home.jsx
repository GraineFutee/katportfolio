import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";

export default function Home() {
  const [bg, setBg] = useState(1);
  const [bg2, setBg2] = useState(2);
  const [activeBg, setActiveBg] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg(activeBg * -1);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [activeBg]);

  return (
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
        className="is-hidden-mobile"
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
      <motion.div
        className="is-hidden-tablet"
        animate={{ opacity: activeBg > 0 ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          height: "80vh",
          background: `transparent url(/bg/${bg}.jpg) center center no-repeat`,
          backgroundSize: "cover",
          zIndex: 3,
        }}
      ></motion.div>
      <div
        className="is-hidden-mobile"
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
        className="is-hidden-tablet"
        style={{
          marginTop: "-80vh",
          height: "80vh",
          background: `transparent url(/bg/${bg2}.jpg) center center no-repeat`,
          backgroundSize: "cover",
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
        <Navbar />
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
  );
}
