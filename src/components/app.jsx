import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./nav";
import ViewAll from "./viewAll";
import SendMoney from "./sendMoney";
import TransactionHistory from "./transactions";
import Home from "./home";
import NewCustomer from "./newcustomer";
import EditCustomer from "./editcustomer";
function App(){
    return (<div>
    <Router>
    <Nav/>
    <hr/>
        <Route path="/view" component={ViewAll} exact/>
        <Route path="/transfer" component={SendMoney} exact/>
        <Route path="/" component={Home} exact/>
        <Route path="/transaction" component={TransactionHistory} exact/>
        <Route path="/new" component={NewCustomer} exact/>
        <Route path="/update" component={EditCustomer}/>
    </Router>
    </div>);
}

export default App;