import React from "react";
import FormUpdate from "../components/form/form";
import styles from "./CardProvider.module.css";

const { card, cardButton } = styles;
const CardProvider = () => {
  return (
    <>
      <div className={card}>
        <FormUpdate />

        <button className={cardButton}>Actualizar</button>
      </div>
    </>
  );
};

export default CardProvider;
