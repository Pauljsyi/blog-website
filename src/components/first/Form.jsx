import React from "react";
import { Link } from "react-router-dom";

function Form(){
        
    return <div>
        <form id="form" className="form" action="">
            <h2>Log in</h2>
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter username" />
                {/* <small>Error message</small> */}
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" />
                {/* <small>Error message</small> */}
            </div>
            <Link to="/page2">
            <button type="submit">Submit</button>
            </Link>


            
        </form>
    </div>
}

export default Form;

