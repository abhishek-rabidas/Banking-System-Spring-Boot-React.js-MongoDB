import React from "react";
import {Link} from "react-router-dom";
import "../style/nav.css"
function Nav(){


        const navbar = React.useRef();
        const [isClicked, setIsClicked] = React.useState(false);

        
        const navToggle = () => {
            
            if(isClicked){
                navbar.current.style.display="none"
               
            }else{
                navbar.current.style.display="flex";   
            }
        }

    
    

    return (<nav>
  
    <i onClick={()=>{
        setIsClicked(!isClicked);
        navToggle();
    }} id="hamburger" className={isClicked===true?"fas fa-times":"fas fa-bars"} ></i>

                    <ul ref={navbar} id="navbar">
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