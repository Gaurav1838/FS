import React from "react";
import { useState } from "react";
function Status() {
    
    let [usersubmit, setUsersubmit] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        setUsersubmit(!usersubmit);

    }
    return(
        <form onSubmit={handlesubmit}>

            <div>
                <h2>User Status</h2>

                <h3 style={{color:(usersubmit? 'green' : 'red')}}>{usersubmit? "Online" : "Offline"}</h3>
                <button type="submit">{usersubmit? "Go Offline" : "Go Online"}</button>
            </div>
        </form>

    );
}

export default Status;