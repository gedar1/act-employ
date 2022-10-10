import React from "react";
import { useState } from "react";

import styles from "./Input.module.css";

const { forminput } = styles;
const InputGo = ({ type, id, label, placeholder }) => {

  return (
    <>
      <input
        className={forminput}
        type={type}
        key={id}
        placeholder={label}
        onChange={(e) => setIdproduct(e.target.value)}
      />
    </>
  );
};

export default InputGo;
