import React from "react";
import {Link} from "react-router-dom"

function Body(){
    return <div>
        <Link to="/page2"><button>View your blogs</button></Link>
        <Link to="/"><button>Log out</button></Link>
    </div>
}

export default Body;