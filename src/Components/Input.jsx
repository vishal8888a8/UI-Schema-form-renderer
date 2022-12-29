import React from "react";
import './Input.css'
function Input(props)
{
    return(
        <div className="input_container">
            <label>{props.label}</label>
            <input placeholder="type your input here..."></input>
        </div>
    )
}

export default Input;