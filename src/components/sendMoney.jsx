import React from "react";
import axios from "axios";
import base_url from "../api";

function SendMoney(){

    const [transaction, setTransaction]= React.useState({});

    function formHandler(e){

        axios.put(`${base_url}/transaction`,transaction).then((res)=>{
            console.log("MONEY SENT");
            alert("Transaction Successful");
        }, (err)=>{console.log("MONEY NOT SENT");})
        console.log(transaction);
        e.preventDefault();
       
        console.log(transaction);
        
    }

    return (<div>
   <h1>Transfer Money</h1>
   <form onSubmit={formHandler}>
       <input onChange={(e)=>{
           setTransaction({...transaction, id:e.target.value})
       }} id="id" type="number" placeholder="Enter the account number: " required name="id"/>
       <input onChange={(e)=>{
           setTransaction({...transaction, balance:e.target.value})
       }} type="number" placeholder="Enter the amount: " required name="balance"/>
       <input type="submit" value="SEND"/>
   </form>
    </div>);
}

export default SendMoney;