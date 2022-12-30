import React from "react";
import './Switch.css'

function Switch(props)
{
    return(
        <div className="switch_container">  
            <input type="checkbox" id="id_switch" name="" value=""></input>
            <label for="id_switch">{props.obj.label}</label><br></br>
        </div>
    )
}

export default Switch;