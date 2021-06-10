import React from "react";

function TransactionField(props){
    return (<tr style={{textAlign:"center"}} >
   
        <td>{props.id}</td>
        <td>{props.account_number}</td>
        <td>{props.holder}</td>
        <td>{props.amount}</td>
 
    </tr>);
}

export default TransactionField;