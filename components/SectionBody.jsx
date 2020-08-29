import React from "react";

export default function SectionBody(props) {
  return (
    <>
      {props.bg ? (
        <section
          className="section py-0 px-0"
          style={{
            background: `transparent url(${props.bg}) center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(47, 54, 64, 0.6)",
              height: "100%",
            }}
          >
            <div className="container py-6">
              <div className="content has-text-centered has-text-white">
                {props.children}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="section my-2">
          <div className="container">
            <div className="content has-text-centered">{props.children}</div>
          </div>
        </section>
      )}
    </>
  );
}
