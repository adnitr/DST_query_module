import React from "react";
import {Link} from "react-router-dom";
const department2= ()=>
{
    return(
        <form action="/examples/actions/confirmation.php" method="post">
        <label>Email: <input type="text" name="mail"/></label>
        <label>QUERY: <input type="text" name="query"/></label>
        <input type="submit" value="Submit"/>
    </form>
    );
};
export default department2;