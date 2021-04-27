import classes from './Input.module.css';
import React from 'react'


const Input = React.forwardRef((props,ref)=> {
    return <div className={classes.input}>
        <lebel htmlFor={props.input.id}>{props.lebel}</lebel> 
        <input ref={ref} {...props.input}/>
    </div>
});

export default Input;