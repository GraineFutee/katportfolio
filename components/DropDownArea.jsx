import React from "react";
import { motion } from "framer-motion";

export default function DropDownArea(props) {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <div
        style={{ zIndex: 6 }}
        className="has-text-white"
        onClick={() =>
          props.setVisibleArea(
            props.visibleArea === props.title ? "" : props.title
          )
        }
      >
        <p
          className="heading is-size-6"
          style={{ zIndex: 8 }}
          onClick={() =>
            props.setVisibleArea(
              props.visibleArea === props.title ? "" : props.title
            )
          }
        >
          {props.title} &nbsp;
          <motion.i
            animate={{
              rotate: props.visibleArea === props.title ? 180 : 0,
            }}
            className="fas fa-sort-down my-0"
          />
        </p>
      </div>
      <motion.div
        style={{ zIndex: 3, overflow: "hidden" }}
        initial={{ maxHeight: 0 }}
        animate={
          props.visibleArea === props.title
            ? { maxHeight: 100 }
            : { maxHeight: 0 }
        }
        transition={{ ease: "easeInOut" }}
      >
        {props.children}
        {/* {props.visibleArea === props.title ? props.children : ""} */}
      </motion.div>
      <hr className="mx-6" />
    </motion.div>
  );
}
