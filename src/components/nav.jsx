import React from "react";
import {Link} from "react-router-dom";
import "../style/nav.css"
function Nav(){
    return (<nav>
                    <ul>
                        <Link to="/">
                                      <li>Dasboard</li>
                        </Link>
                         <Link to="/transfer">
                                     <li>Transfer Money</li>
                        </Link>
                        <Link to="/transaction">
                                    <li>Transaction History</li>
                        </Link>
                        <Link to="/view">
                                    <li>View All Beneficiaries</li>
                        </Link>
        
                     </ul>
                </nav>);
}

export default Nav;