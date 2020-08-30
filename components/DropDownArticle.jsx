import React from "react";
import { motion } from "framer-motion";

export default function DropDownArticle(props) {
  return (
    <div>
      <motion.div
        id={props.title}
        whileHover={{ x: 40 }}
        href={`#${props.title}`}
        onClick={() => {
          props.setVisibleArticle(
            props.visibleArticle === props.title ? "" : props.title
          );
          props.visibleArticle !== props.title &&
            setTimeout(() => {
              document.getElementById(props.title).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }, 500);
        }}
      >
        <p className="heading is-size-5 has-text-left">
          {props.title} &nbsp;
          <motion.i
            animate={{
              rotate: props.visibleArticle === props.title ? 180 : 0,
            }}
            className="fas fa-sort-down my-0"
          />
        </p>
      </motion.div>
      <motion.div
        className="mt-3"
        style={{ overflow: "hidden" }}
        initial={{ maxHeight: 0 }}
        animate={
          props.visibleArticle === props.title
            ? { maxHeight: 6000 }
            : { maxHeight: 0 }
        }
        transition={{ ease: "easeInOut" }}
      >
        {props.children}
      </motion.div>
      <hr className="mx-6" />
    </div>
  );
}
