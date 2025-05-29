import React from "react";
import { useState } from "react";

function FeedbackPoll(){
    let[choice,setChoice]=useState("")

    return(
        <>
        {!choice?(
            <div>
                <h5>How would you rate our tech support?</h5>
                <input type="radio" name="feedback" value="poor" checked={choice==="poor"} onChange={(e)=>setChoice(e.target.value)}/>
                <span>Poor</span><br />
                <input type="radio" name="feedback" value="neutral" checked={choice==="neutral"} onChange={(e)=>setChoice(e.target.value)}/>
                <span>Neutral</span> <br />
                <input type="radio" name="feedback" value="Good" checked={choice==="Good"} onChange={(e)=>setChoice(e.target.value)}/>
                <span>Good</span><br />
            </div>

        ):(<h1>Thank you for choosing {choice}</h1>)}
        </>
    )
}
export default FeedbackPoll