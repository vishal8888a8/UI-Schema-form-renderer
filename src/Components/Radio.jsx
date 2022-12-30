import React from "react";
import './Radio.css'

function Radio(props)
{
    return(
        <div className="radio_container">
            {props.obj.level!==0?null:
            <div>
                <div>
                    <label>{props.obj.label}</label>
                </div>
                <div className="line"></div>
            </div>}
            <div className="container">
                {props.obj["validate"]["options"].map((item)=><div class="item">{item.label}</div>)}
            </div>
        </div>
    )
}

export default Radio;