"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Button from "./buttonComp/button";

export default function Home() {
  const [buttons,setButtons] = useState(['AC','DEL','/','1','2','3','*','4','5','6','+','7','8','9','-','.','0','=']);
  const [calculate, setCalculate] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.calculator_box}>
        <div className={styles.header}>
          <input  type="text" className={styles.input} value={calculate} disabled/>
        </div>
        <div className={styles.buttons}>
          <>
            {buttons.map((button, index) => (<Button key={index} value={button} Calculate={calculate} setCalculate={setCalculate}/>))}
          </>
        </div>
      </div>
    </div>
  );
}
