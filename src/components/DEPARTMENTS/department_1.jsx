import React from "react";
import {Link} from "react-router-dom";
const department1= ()=>
{
    return(
        <>
        <>
        <p>
            question 1?
        </p>
        <p>
            answer 1
        </p>
        <br/>
        </>
        <>
        <p>
            question 2?
        </p>
        <p>
            answer 2
        </p>
        <br/>
        </>
        <>
        <p>
            question 3?
        </p>
        <p>
            answer 3
        </p>
        <br/>
        </>
        <br/>
        <div>
            <button type="button"><Link to="/new">newquery</Link></button>
        </div>
        </>
    );
};
export default department1;