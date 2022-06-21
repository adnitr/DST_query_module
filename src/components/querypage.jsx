import React from "react";
import "./querypage.css"
import {Link} from "react-router-dom";
const querypage= ()=>
{
    return(
        <div>
            <h1>QUERY PAGE</h1>
        <div class="dropdown">
            <button class="dropbtn" type="button">Dropdown</button>
            <div class="dropdown-content">
                <Link to="/querypage/department_1">DEPARTMENT 1</Link>
            </div>
        </div>
        <br />
        <div class="dropdown">
            <button class="dropbtn" type="button">Dropdown</button>
            <div class="dropdown-content">
                <Link to="/querypage/department_2">DEPARTMENT 2</Link>
            </div>
        </div>
        </div>
    );
};
export default querypage;