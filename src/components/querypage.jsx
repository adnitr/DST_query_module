import React from "react";
import "./querypage.css"
import {Link} from "react-router-dom";
const querypage= ()=>
{
    return(
        <div>
            <h1>Query Page- Choose Scheme and query type</h1>
        <div class="dropdown">
            <button class="dropbtn" type="button">Scheme 1</button>
            <div class="dropdown-content">
                <Link to="/querypage/department_1">Query Type 1</Link>
                <Link to="/querypage/department_1">Query Type 2</Link>
                <Link to="/querypage/department_1">Query Type 3</Link>
            </div>
        </div>
        <br />
        <div class="dropdown">
            <button class="dropbtn" type="button">Scheme 2</button>
            <div class="dropdown-content">
                <Link to="/querypage/department_2">Query Type 1</Link>
                <Link to="/querypage/department_2">Query Type 2</Link>
                <Link to="/querypage/department_2">Query Type 3</Link>
            </div>
        </div>
        </div>
    );
};
export default querypage;