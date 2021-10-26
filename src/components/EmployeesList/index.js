import React, { useEffect, useState } from "react";
import { DeleteEmployeeButton, EmployeesTable, EmployeesTBody, EmployeesTHead, LoadingContainer, UpdateEmployeeButton } from "./styles";
import DeleteIcon from "../../assets/icons/person_remove_black_24dp.svg";
import UpdateIcon from "../../assets/icons/manage_accounts_black_24dp.svg";
import Loader from "react-loader-spinner";
import * as Variables from '../../styles/_variables';
import { ApiService } from "../../data/api";
import { Utils } from "../../utils";
import DeleteModal from "../_dialogs/DeleteModal";
import NotFoundView from "../NotFound/index";
import EmployeeModal from "../_dialogs/EmployeeModal";
import { EmployeeEntity } from "../../domain/entities/employee-entity";

function EmployeesList() {
    const [employee, setEmployee] = useState(null);
    const [employees, setList] = useState(null);
    const [foundData, setFoundData] = useState(false);

    // Dialogs
    const [deleteModalIsOpen, setDeleteIsOpen] = useState(false);
    const [employeeModalIsOpen, setEmployeeIsOpen] = useState(false);

    const api = ApiService.getInstance();

    useEffect(() => _getEmployeesList(), []);

    function _getEmployeesList() {
        api.getAll().then((response) => {
            if(Array.isArray(response)) setFoundData(true);
            setList(response);
        }).catch((e) => {
            // When some connection error happens it must show the NotFoundView component
            setList([]);
        });
    }
    
    async function _rebuildEmployeesList() {
        setList(null);
        await _getEmployeesList();
    }

    /*
     * Delete modal dialog methods
     */
    const openDeleteModal = (employee) => {
        setEmployee(employee);
        setDeleteIsOpen(true);
    }

    const afterCloseDeleteModal = async () => await _rebuildEmployeesList();
    
    const closeDeleteModal = () => {
        setDeleteIsOpen(false);
    }

    async function deleteEmployee() {
        await api.deleteEmployee(employee._id).then((result) => closeDeleteModal());
    }


    /*
     *  Employees dialog methods 
     */
    const openEmployeeModal = (employee) => {
        setEmployee(employee);
        setEmployeeIsOpen(true);
    };

    const closeEmployeeModal = () => setEmployeeIsOpen(false);

    return !employees
        ? <LoadingContainer>
            <Loader color={Variables.BLUE_POOL}></Loader>
        </LoadingContainer> 
        : !foundData 
        ? <NotFoundView></NotFoundView>
        : (
        <EmployeesTable>
            <EmployeesTHead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Start Date</th>
                    <th>Team</th>
                    <th>Actions</th>
                </tr>
            </EmployeesTHead>
            <EmployeesTBody>
                {
                    employees.map((employee, index) => {
                        return (
                            <tr key={index}>
                                <td>{ employee.name }</td>
                                <td>{ employee.email}</td>
                                <td>{ Utils.formatDate(employee.start_date) }</td>
                                <td>{ Utils.getTeam(employee.team) }</td>
                                <td>
                                    <DeleteEmployeeButton onClick={() => openDeleteModal(employee)}><img src={DeleteIcon} /></DeleteEmployeeButton>
                                    <UpdateEmployeeButton onClick={() => openEmployeeModal(employee)}><img src={UpdateIcon} /></UpdateEmployeeButton>
                                </td>
                            </tr>
                        );
                    })
                }
            </EmployeesTBody>

            <DeleteModal 
                isOpen={deleteModalIsOpen} 
                employee={employee} 
                onRequestClose={closeDeleteModal}
                onDelete={ async () => await deleteEmployee() }
                onAfterClose={ async () => await afterCloseDeleteModal() }
            ></DeleteModal>

            <EmployeeModal
                isOpen={employeeModalIsOpen}
                employee={employee}
                onRequestClose={closeEmployeeModal}
                onAfterOpen={() => setEmployee(undefined)}
            ></EmployeeModal>

        </EmployeesTable>

    );
}

export default EmployeesList;