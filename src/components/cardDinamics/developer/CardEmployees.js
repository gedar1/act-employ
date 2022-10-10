import React from "react";
import { useEffect, useState, useContext } from "react";
import InputGo from "../../inputs/inputdinamic";
import CheckForm from "../../checks/check";
import styles from "./CardEmployees.module.css";
//import data from '../../../../context/formcontext/data.json'
import ContextForm from "../../../../context/formcontext/ContexForm";
//import getEmployees from "../../../../pages/api/hello"
const { carddinamics } = styles;

const CardEmployees = () => {
  const cardctx = useContext(ContextForm);
  const { getData, jobs, option } = cardctx;

  useEffect(() => {
    getData();
  }, []);
  console.log(option);
  console.log(jobs);
  const elements = jobs?.[`${option}`]; //?.split('-')
  console.log(elements);

  const jobsItems = elements?.["data-needed"];
  console.log(jobsItems);

  const inputstxt = jobsItems?.filter((item) => item.type != "checkbox");
  console.log(inputstxt);

  const checkboxes = jobsItems?.filter((item) => item.type === "checkbox");
  console.log(checkboxes);

  const checksDinamics = checkboxes?.map((item, i) => {
    return <CheckForm key={i} type={item.type} label={item.label} />;
  });

  const dinamicsInput = inputstxt?.map((item, i) => {
    return (
      <InputGo
        type={item.type}
        key={i}
        id={item.id}
        label={item.label}
        placeholder={item.label}
      />
    );
  });

  console.log(jobsItems);

  return (
    <>
      <div className={carddinamics}>
        {dinamicsInput}
        <br />
        {checksDinamics}
      </div>
    </>
  );
};

export default CardEmployees;
