
import styles from "../page.module.css";

import { Dispatch, SetStateAction } from "react";


interface ButtonProps {
    value : string;
    Calculate: string,
    setCalculate:Dispatch<SetStateAction<string>>,
}


const button = ({value, Calculate, setCalculate} : ButtonProps) => {

    const clickHandle = () => {
    if(value !== "AC" && value !== "DEL" && value !== '=' && Calculate != 'Infinity' && Calculate !== 'Error' ){
        setCalculate(Calculate+value);
    }
    else if(value === '='){
        try {
            setCalculate(eval(Calculate));
        } catch (error) {
            setCalculate('Error');
        }
    }
    else if(value == 'AC'){
        setCalculate('');
    }
    else if(value == 'DEL'){
        setCalculate(Calculate.replace(Calculate[Calculate.length-1],''))
    }
    }
    return <button className={(value == 'AC' || value == '=' ) ? `${styles.button} ${styles.large_button}`: `${styles.button}` } onClick={clickHandle} >{value}</button>
};

export default button;