import React from "react";
import Customer from "./customer";
import base_url from "../api";
import axios from "axios";
import {Link} from "react-router-dom";
function ViewAll(){

    const [customer, setCustomer] = React.useState([]);

    React.useEffect(()=>{
            getAllCustomers();
    }, [customer]);

    function getAllCustomers(){
        axios.get(`${base_url}/getall`).then((res)=>{
            setCustomer(res.data);
        }, (err)=>{
            console.log("DATA NOT FETCHED");
        });

    }

    return (<div>
   <h1>All Beneficiaries</h1>
   <Link style={{border: "1px solid black", padding: "10px"}} to="/new">Add New Beneficiary</Link>
   <br/>
   <br />
   {
       customer.map((item, index)=>{
        return <Customer key={index} id={item.id} name={item.name} email={item.email} mobile={item.mobile} balance={item.balance} />
       })
   }
   
    </div>);
}

export default ViewAll;