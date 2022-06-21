import React from "react";
import {Link} from "react-router-dom";
const home= ()=>
{
    return(
        <div>
            <button type="button"><Link to="/querypage">connect</Link></button>
        </div>
    );
};
export default home;