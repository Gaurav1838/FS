import React, {useState} from 'react';
const ContactForm = ()=>{
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');
    const[age,setAge]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`submitted: ${email} - ${message}`);
    };
    return(
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/><br/>

            <label>Message: </label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <br/><br/>
        
            <label>Age: </label>
            <input type="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <br/><br/>

            <button type="submit">send</button>
        </form>
    )
}

export default ContactForm;