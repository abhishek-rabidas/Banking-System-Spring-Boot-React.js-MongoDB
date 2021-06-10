import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import base_url from "../api";
function Customer(props){

  function deleteUser(id) {
        axios.delete(`${base_url}/delete/${id}`).then((res)=>{
            alert("Beneficiary Deleted");
        }, (err)=>{
            console.log("Unable to delete");
        });
    }


    return (<div style={{border: "3px solid black", padding: "10px", marginBottom: "10px"}}>
        <h3>{props.name}</h3>
        <h6>Account Number: {props.id}</h6>
        <h6>Email: {props.email}</h6>
        <h6>Mobile: {props.mobile}</h6>
        <h6>Available Balance: Rs. {props.balance}</h6>
		<button onClick={()=>deleteUser(props.id)}>DELETE</button>
        <br/>
        <Link to={`/update?id=${props.id}`}><h3>Update</h3></Link>
    </div>);
}

export default Customer;