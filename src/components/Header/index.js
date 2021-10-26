import React from "react";
import { CreateEmployeeButton, HeaderBackground } from "./styles";
import AddCircleIcon from "../../assets/icons/add_circle_black_24dp.svg";
import EmployeeModal from "../_dialogs/EmployeeModal";
import { useState } from "react/cjs/react.development";

function Header() {
    const [openDialog, setOpen] = useState(false);

    const closeEmployeeModal = () => setOpen(false); 

    return (
        <HeaderBackground>
           <h1>Nutcache Employees</h1> 
           <CreateEmployeeButton onClick={() => setOpen(true)}>
               <img src={AddCircleIcon}/>
               <p>Add Employee</p>
           </CreateEmployeeButton>

           <EmployeeModal 
                isOpen={openDialog} 
                onRequestClose={closeEmployeeModal}
            ></EmployeeModal>
        </HeaderBackground>
    );
}

export default Header;