import React from "react";
import Customer from "./customer";
import base_url from "../api";
import axios from "axios";
import {Link} from "react-router-dom";
import "../style/customers.css"
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

    return (<div id="customers">
   <h1>All Beneficiaries</h1>
   <Link className="add-btn" to="/new"><i class="fas fa-user-plus"></i><span>Add New Beneficiary</span></Link>
   <br/>
   <br/>
   <div id="table-wrapper">
   <table>
       <thead>
       <tr>
           <th>Account Number</th>
           <th>Account Holder</th>
           <th>Email</th>
           <th>Phone Number</th>
           <th>Available Balance</th>
           <th>Actions</th>
        </tr>
       </thead>
       <tbody>
       {
       customer.map((item, index)=>{
        return <Customer key={index} id={item.id} name={item.name} email={item.email} mobile={item.mobile} balance={item.balance} />
       })
       }
       </tbody>
       </table>
       </div>
    </div>);
}

export default ViewAll;