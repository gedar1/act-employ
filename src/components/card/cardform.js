import React from "react";
import {useContext,useState,useEffect} from 'react'
import FormUpdate from '../form/form'
import SelectEmploy from '../selects/select'
import ContextForm from '../../../context/formcontext/ContexForm'
import styles from './Card.module.css'


const {card,
       cardDetails,
       textTitle,
       textBody,
       cardButton,
      carddinamics} = styles
const CardForm = ({data}) => {

  const [stringbtn,setStringbtn] = useState()
  //console.log(data)
  const {option} = useContext(ContextForm)

  const optionButton=()=> {(option != 'cargo' ) ? setStringbtn('Actualizar') : setStringbtn('Elige un cargo')}

  useEffect(() => {
    
  optionButton()
   
  }, [option])
  
   console.log(option);
  return (
    <>
      <div className={card}>
        <FormUpdate/>
          
        
        <button className={cardButton}>{stringbtn}</button>
      </div>
    </>
  );
};


  

export default CardForm;
