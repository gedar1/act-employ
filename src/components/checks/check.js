import React from "react";
import { useState } from "react";
import styles from "./Check.module.css";

const { checkbox, inputch, label } = styles;

const CheckForm = ({ type, id, label }) => {
  const [check, setCheck] = useState(false);
  return (
    <>
      <label>
        <span className="checkbox">{label}</span>
        <input className="checkbox" type={type} checked={check} />
      </label>
    </>
  );
};

export default CheckForm;
