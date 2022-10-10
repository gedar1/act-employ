import React from "react";
import { useState,useContext } from "react";
import { useRouter } from "next/router";
import SelectEmploy from "../selects/select";
import ContextForm from '../../../context/formcontext/ContexForm'
import CardEmployees from '../cardDinamics/developer/CardEmployees'


import styles from "./Form.module.css";


const { formtitle,formsubtitle,carddinamics,card } = styles;

const FormUpdate = () => {

  const rout = useRouter();
  const formctx = useContext(ContextForm);
  const { option,setOption } = formctx;
  
  const handleaOnclickGo = () => {
    setBtnsearch(false);
    setIdproduct("");
    rout.push("/about");
  };
  return (
    <>
      <div className={card}>
        <div className={formtitle}>
          <h2>Formulario de Actualizacion de datos</h2>
        </div>
        
        <div className={formsubtitle}>
          <SelectEmploy />
        </div>

        <div className={carddinamics}>
          { option === 'cargo' ? null : <CardEmployees/>} 
        </div>
      </div>   
    </>
  );
};

export default FormUpdate;
