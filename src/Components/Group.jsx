import React from "react";
import render from './render'
import './Group.css'

function Group(props)
{
    return(
        <div className="Group_container">
            <div className="label">
                <label>{props.obj.label}</label>
            </div>
            <div className="line"></div>
            {props.obj.subParameters.map(render) }
        </div>
    )
}

export default Group;