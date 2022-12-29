import React from "react";
import './Select.css';

function Select(props)
{
    return(
        <div className="select_container">
            <label>{props.obj.label}</label>
            <select className="select_container_item">
                {props.obj.validate.options.map((item,idx)=><option className="item" value={item.value}>{item.label}</option>)}
            </select>
        </div>
    );
}

export default Select;