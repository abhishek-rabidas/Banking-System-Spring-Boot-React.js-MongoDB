import React from "react";
import axios from "axios";
import base_url from "../api";
import {useLocation} from "react-router-dom";
function EditCustomer(){

    const [user, setUser] = React.useState({});

    function formHandler(e){

       axios.post(`${base_url}/update`,customer).then((res)=>{
           console.log(customer);
           alert("Beneficiary Updated");
       }, (err)=>{console.log("DATA NOT SENT");})

        e.preventDefault();
        
    }

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    const [customer, setCustomer] = React.useState({});

    React.useEffect(()=>{
        getCustomer();
    }, []);

    function getCustomer(){
        axios.get(`${base_url}/get/${id}`).then((res)=>{
            setCustomer(res.data);
        }, (err)=>{
            console.log("DATA NOT FETCHED");
        });
    }

    return (
    <div>
         <form onSubmit={formHandler}>

<input name="id" type="number" placeholder="Account Number:" value={customer.id} />
    <input onChange={(e)=>{
        setCustomer({...customer, name:e.target.value});
    }} placeholder="Name:" name="name" type="text" value={customer.name} />
    <input onChange={(e)=>{
        setCustomer({...customer, email:e.target.value});
    }} placeholder="Email:" name="email" type="text" value={customer.email} />
    <input onChange={(e)=>{
        setCustomer({...customer, mobile:e.target.value});
    }} placeholder="Mobile:" name="mobile" type="text" value={customer.mobile} />
    <input onChange={(e)=>{
        setCustomer({...customer, balance:e.target.value});
    }} placeholder="Balance:" name="balance" type="number" value={customer.balance} />
    <button type="submit">Update</button>
    <button type="reset">Clear</button>
</form>

    </div>
    )
}

export default EditCustomer;