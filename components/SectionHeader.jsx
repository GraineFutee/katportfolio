import React from "react";

export default function SectionHeader(props) {
  return (
    <section
      id={props.id ? props.id : ""}
      className="hero is-dark"
      // style={{
      //   background: "transparent url(/headerBg.jpg) center center no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      {/* <div style={{ backgroundColor: "rgba(30, 39, 46,0.8)" }}> */}
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">{props.title}</h2>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
