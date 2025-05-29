import React from "react";
import { useState } from "react";
import './newsletter.css';
function Newsletter()
{
    let [Username,setUsername] = useState("");
    let [Email,setEmail] = useState("");

    let [usersubmit,setUsersubmit] = useState(false);
    const handlesubmit =(e)=>
    {
        e.preventDefault();
        setUsersubmit(true);

    }
    return(
        <div>
        {!usersubmit?(

            <form onSubmit={handlesubmit} className="Screen">
            <div className="Box">
            <h3>Sign up for the Newsletter</h3>
                
            <input type="text" id="" value={Username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Full Name" />
            <br /><br />

            <input type="text" id="" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <br /><br />
            <button type="submit" className="Btn"> Submit </button>
            </div>
        </form>
        ):(
            <h2>Thank You For Submission {Username}</h2>
        )
    }
        </div>

    )  

}

export default Newsletter;