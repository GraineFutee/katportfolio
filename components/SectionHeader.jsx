import React from "react";

export default function SectionHeader(props) {
  return (
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">{props.title}</h2>
        </div>
      </div>
    </section>
  );
}
