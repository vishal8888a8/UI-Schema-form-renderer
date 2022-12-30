import React from "react";
import Group from "./Group"

function Ignore(props)
{
    return(
        <div className="Ignore_container">
            {false?null: <Group obj={props.obj}/>}
        </div>
    )
}

export default Ignore;