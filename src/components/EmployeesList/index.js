import React from "react";
import { DeleteEmployeeButton, EmployeesTable, EmployeesTBody, EmployeesTHead, LoadingContainer, UpdateEmployeeButton } from "./styles";
import DeleteIcon from "../../assets/icons/person_remove_black_24dp.svg";
import UpdateIcon from "../../assets/icons/manage_accounts_black_24dp.svg";
import Loader from "react-loader-spinner";
import * as Variables from '../../styles/_variables';

function EmployeesList() {

    return true     
        ? <LoadingContainer>
            <Loader color={Variables.BLUE_POOL}></Loader>
        </LoadingContainer> 
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
                <tr>
                    <td>Vinícius Vieira</td>
                    <td>vinicius.vdes@gmail.com</td>
                    <td>23/12/1999</td>
                    <td>Projetos</td>
                    <td>
                        <DeleteEmployeeButton><img src={DeleteIcon} /></DeleteEmployeeButton>
                        <UpdateEmployeeButton><img src={UpdateIcon} /></UpdateEmployeeButton>
                    </td>
                </tr>
                <tr>
                    <td>Vinícius Vieira</td>
                    <td>vinicius.vdes@gmail.com</td>
                    <td>23/12/1999</td>
                    <td>Projetos</td>
                    <td>
                        <DeleteEmployeeButton><img src={DeleteIcon} /></DeleteEmployeeButton>
                        <UpdateEmployeeButton><img src={UpdateIcon} /></UpdateEmployeeButton>
                    </td>
                </tr><tr>
                    <td>Vinícius Vieira</td>
                    <td>vinicius.vdes@gmail.com</td>
                    <td>23/12/1999</td>
                    <td>Projetos</td>
                    <td>
                        <DeleteEmployeeButton><img src={DeleteIcon} /></DeleteEmployeeButton>
                        <UpdateEmployeeButton><img src={UpdateIcon} /></UpdateEmployeeButton>
                    </td>
                </tr><tr>
                    <td>Vinícius Vieira</td>
                    <td>vinicius.vdes@gmail.com</td>
                    <td>23/12/1999</td>
                    <td>Projetos</td>
                    <td>
                        <DeleteEmployeeButton><img src={DeleteIcon} /></DeleteEmployeeButton>
                        <UpdateEmployeeButton><img src={UpdateIcon} /></UpdateEmployeeButton>
                    </td>
                </tr>
                <tr>
                    <td>Vinícius Vieira</td>
                    <td>vinicius.vdes@gmail.com</td>
                    <td>23/12/1999</td>
                    <td>Projetos</td>
                    <td>
                        <DeleteEmployeeButton><img src={DeleteIcon} /></DeleteEmployeeButton>
                        <UpdateEmployeeButton><img src={UpdateIcon} /></UpdateEmployeeButton>
                    </td>
                </tr><tr>
                    <td>Vinícius Vieira</td>
                    <td>vinicius.vdes@gmail.com</td>
                    <td>23/12/1999</td>
                    <td>Projetos</td>
                    <td>
                        <DeleteEmployeeButton><img src={DeleteIcon} /></DeleteEmployeeButton>
                        <UpdateEmployeeButton><img src={UpdateIcon} /></UpdateEmployeeButton>
                    </td>
                </tr><tr>
                    <td>Vinícius Vieira</td>
                    <td>vinicius.vdes@gmail.com</td>
                    <td>23/12/1999</td>
                    <td>Projetos</td>
                    <td>
                        <DeleteEmployeeButton><img src={DeleteIcon} /></DeleteEmployeeButton>
                        <UpdateEmployeeButton><img src={UpdateIcon} /></UpdateEmployeeButton>
                    </td>
                </tr><tr>
                    <td>Vinícius Vieira</td>
                    <td>vinicius.vdes@gmail.com</td>
                    <td>23/12/1999</td>
                    <td>Projetos</td>
                    <td>
                        <DeleteEmployeeButton><img src={DeleteIcon} /></DeleteEmployeeButton>
                        <UpdateEmployeeButton><img src={UpdateIcon} /></UpdateEmployeeButton>
                    </td>
                </tr>
            </EmployeesTBody>
        </EmployeesTable>
    );
}

export default EmployeesList;