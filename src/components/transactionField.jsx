import React from "react";
import "../style/transactions.css"
function TransactionField(props){
    return (<tr>
   
        <td>{props.id}</td>
        <td>{props.account_number}</td>
        <td>{props.holder}</td>
        <td>₹ {props.amount}</td>
 
    </tr>);
}

export default TransactionField;