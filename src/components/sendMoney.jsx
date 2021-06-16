import React from "react";
import axios from "axios";
import base_url from "../api";
import "../style/send_money.css";

function SendMoney(){

    const [transaction, setTransaction]= React.useState({});

    function formHandler(e){

        axios.put(`${base_url}/transaction`,transaction).then((res)=>{
            alert("Transaction Successful");
        }, (err)=>{console.log("MONEY NOT SENT");})
        e.preventDefault();
    }

    return (
    <div id="send-money-container">

   <form autoComplete="off" id="send-money-form" onSubmit={formHandler}>
       <input onChange={(e)=>{
           setTransaction({...transaction, id:e.target.value})
       }} id="id" type="number" placeholder="Account number " required name="id"/>
       <input onChange={(e)=>{
           setTransaction({...transaction, balance:e.target.value})
       }} type="number" placeholder="Amount " required name="balance"/>
       <button type="submit" value="SEND">Transfer</button>
   </form>
    </div>);
}

export default SendMoney;