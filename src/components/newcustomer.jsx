import React from "react";
import axios from "axios";
import base_url from "../api";

import "../style/new.css"

function NewCustomer(){
    
    //var id=1;

    const [user, setUser] = React.useState({});

    function formHandler(e){
       
       axios.post(`${base_url}/post`,user).then((res)=>{
           console.log("DATA SENT");
            alert("Beneficiary Added");
       }, (err)=>{console.log("DATA NOT SENT");})

        e.preventDefault();
       
    }
    
    
    return (<div id="new">

        <form id="new-form" onSubmit={formHandler}>

        <input onChange={(e)=>{
                setUser({...user, id:e.target.value})
            }} name="id" type="number" required placeholder="Account Number:" />
            <input onChange={(e)=>{
                setUser({...user, name:e.target.value})
            }} placeholder="Name:" required name="name" type="text" />
            <input onChange={(e)=>{
                setUser({...user, email:e.target.value})
            }} placeholder="Email:" required name="email" type="text" />
            <input onChange={(e)=>{
                setUser({...user, mobile:e.target.value})
            }} placeholder="Mobile:" required name="mobile" type="text" />
            <input onChange={(e)=>{
                setUser({...user, balance:e.target.value})
            }} placeholder="Balance:" required name="balance" type="number" />
            <button type="submit">Add</button>
            <button type="reset">Clear</button>
        </form>
        
    </div>);
}

export default NewCustomer;