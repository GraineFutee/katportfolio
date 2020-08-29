import React from "react";

export default function SectionBody(props) {
  return (
    <section className="section my-6">
      <div className="container">
        <div className="content has-text-centered">{props.children}</div>
      </div>
    </section>
  );
}
