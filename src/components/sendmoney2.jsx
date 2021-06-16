import React from "react";
import axios from "axios";
import base_url from "../api";
import "../style/send_money.css";
import {useLocation} from "react-router-dom";
function Transfer(){

    

    const [transaction, setTransaction]= React.useState({});

    function formHandler(e){
        /* setTransaction({id:document.getElementById('id').value, balance: document.getElementById('bal').value}); */

        axios.put(`${base_url}/transaction`,transaction).then((res)=>{
            alert("Transaction Successful");
        }, (err)=>{console.log("MONEY NOT SENT");})

        e.preventDefault();
        console.log(transaction);

        
    }

    const search = useLocation().search;
    const acc = new URLSearchParams(search).get('id');

    return (
    <div id="send-money-container">

<form autoComplete="off" id="send-money-form" onSubmit={formHandler}>
       <input id="id" type="number" placeholder="Account number" value={acc} required name="id"/>
       <input onChange={(e)=>{
           setTransaction({id:document.getElementById('id').value, balance:e.target.value})
       }} type="number" placeholder="Amount " required name="balance"/>
       <button type="submit" value="SEND">Transfer</button>
   </form>
    </div>);
}

export default Transfer;