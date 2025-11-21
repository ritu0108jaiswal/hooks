import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({
  onClick,
  varient = "Primary",
  type = "Submit",
  children,
}) => {
  return (
    <button className={`${styles.btn}  ${varient}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.node.isRequired,
  varient: PropTypes.oneOf(["primary", "seconday"]),
};

export default Button;
