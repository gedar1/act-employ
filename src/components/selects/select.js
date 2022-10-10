import React from "react";
import { useState,useContext } from "react";
import ContextForm from '../../../context/formcontext/ContexForm'
import styles from "./Select.module.css";

const { selectdropdown, select } = styles;
const selectEmploy = () => {
  const formctx = useContext(ContextForm);
  const { option,setOption } = formctx;
  
  
  return (
    <>
      <select
        className={selectdropdown}
        value={option}
        onChange={(e) => setOption(e.target.value)}
        required
      >
        <option value="" hidden>
          Cargo
        </option>
        <option value="manager">Manager</option>
        <option value="tech-lead">Lide Tecnico</option>
        <option value="scrum-master">Scrum Master</option>
        <option value="developer">Developer</option>
      </select>
    </>
  );
};

export default selectEmploy;
