import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm= props =>{
    const[amountIsValid, setAmoutIsValid]= useState(true);
    const amountInputRef= useRef();

    const submitHandler= event=>{
        event.preventDefault();

        const enteredAmount= amountInputRef.current.value;
        const enteredAmountNumber= +enteredAmount;
        if(enteredAmount.trim().length === 0 
        || enteredAmount< 1 || 
        enteredAmount > 5)
        {
            setAmoutIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        lebel="Amount" 
        input={{
            id:"input", 
            type:"number",
            min:"1",
            max:"5",
            defaultValue:"1",
            step:"1"
        }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid input</p>}
    </form>
}

export default MealItemForm;