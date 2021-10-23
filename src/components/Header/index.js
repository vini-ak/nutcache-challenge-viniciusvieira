import React from "react";
import { CreateEmployeeButton, HeaderBackground } from "./styles";
import AddCircleIcon from "../../assets/icons/add_circle_black_24dp.svg";

function Header() {
    return (
        <HeaderBackground>
           <h1>Nutcache Employees</h1> 
           <CreateEmployeeButton>
               <img src={AddCircleIcon}/>
               <p>Add Employee</p>
           </CreateEmployeeButton>
        </HeaderBackground>
    );
}

export default Header;