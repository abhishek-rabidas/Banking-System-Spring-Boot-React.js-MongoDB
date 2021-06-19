import React from "react";
import axios from "axios";
import base_url from "../api";
import "../style/transactions.css"
import TransactionField from "./transactionField";

function TransactionHistory(){

    const [list, setList] = React.useState([]);

    React.useEffect(()=>{
        axios.get(`${base_url}/transaction`).then(res=>{
            setList(res.data);
        }, err=>{
            console.log("HISTORY NOT FETCHED");
    });
}, [list]);


    return (<div id="transactions">
   <h1>Transaction History</h1>
   <table>
       <thead>
       <tr>
           <th>ID</th>
           <th>Account Number</th>
           <th>Account Holder</th>
           <th>Amount</th>
           </tr>
       </thead>
       <tbody>
           
   {
       list.map((item,index) => <TransactionField key={index} id={index} account_number={item.account_number}  holder={item.account_holder} amount={item.amount} />)
   }
     </tbody>
   </table> 

    </div>);
}

export default TransactionHistory;
