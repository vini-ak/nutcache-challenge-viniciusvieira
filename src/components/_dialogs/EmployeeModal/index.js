import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { ApiService } from "../../../data/api";
import { EmployeeEntity } from "../../../domain/entities/employee-entity";
import { Gender } from "../../../domain/types/gender-type";
import { TeamType } from "../../../domain/types/team-type";
import { Utils } from "../../../utils";
import { ButtonsContainer, CancelButton, EmployeeButton, EmployeeDialogContainer, InputContainer } from "./styles";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function EmployeeModal(props) {
    const [employee, setEmployee] = useState(props.employee !== undefined ? props.employee : new EmployeeEntity());

    const api = ApiService.getInstance();

    useEffect(() => initModal(), []);

    const updateEmployeeState = (employee) =>  {
        setEmployee(employee);
    }
    
    // Fields controllers
    const [name, setName] = useState(props.employee ? props.employee.name : "");
    const [birth_date, setBirthDate] = useState(props.employee ? props.employee.birth_date : "");
    const [gender, setGender] = useState(props.employee ? props.employee.gender : 0);
    const [email, setEmail] = useState(props.employee ? props.employee.email : "");
    const [cpf, setCpf] = useState(props.employee ? props.employee.cpf : "");
    const [start_date, setStartDate] = useState(props.employee ? props.employee.start_date : "");
    const [team, setTeam] = useState(props.employee ? props.employee.team : undefined);

    function initModal() {
        let propsValue = props.employee;
        let value = propsValue !== undefined  ? propsValue : new EmployeeEntity();

        if(value) {
            employee.name = value.name;
            employee.birth_date = value.birth_date;
            employee.gender = value.gender;
            employee.email = value.email;
            employee.cpf = value.cpf;
            employee.start_date = value.start_date;
            employee.team = value.team;
            employee._id = value._id;
        }

        updateEmployeeState({...employee});

        employee;

        if(value && value.name !== undefined) {
            setName(value.name);
            setBirthDate(value.birth_date);
            setGender(value.gender);
            setEmail(value.email);
            setCpf(value.cpf);
            setStartDate(value.start_date);
            setTeam(value.team);
        }
        debugger;
    }

    
    async function onSubmit() {
        employee.name = name;
        employee.birth_date = birth_date;
        employee.gender = Number.parseInt(gender);
        employee.email = email;
        employee.cpf = cpf;
        employee.start_date = start_date;
        employee.team = team !== undefined ? Number.parseInt(team) : undefined;

        if(!props.employee) {
            await api.addEmploye(employee).then(response => document.location.reload());
        } else {
            await api.updateEmployee(employee).then(response => document.location.reload());
        }
    }

    function updateField(callback, event) {
        callback(event.target.value);
    }


    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            style={customStyles}
            onAfterClose={props.onAfterOpen}
            onAfterOpen={initModal}
        >
            <EmployeeDialogContainer>
                <h3>{props.employee ? "Update employee" : "Create employee"}</h3>
                <form onSubmit={async () => await onSubmit()}>
                    <InputContainer>
                        <label>Name</label>
                        <input value={name} onChange={(e => updateField(setName, e))} required></input>
                    </InputContainer>

                    <InputContainer>
                        <label>Birth Date</label>
                        <input type="date" value={birth_date} onChange={e => updateField(setBirthDate, e)} required></input>
                    </InputContainer>

                    <InputContainer>
                        <label>Gender</label>
                        <select value={gender} onChange={e => updateField(setGender, e)} required>
                            {
                                Object.entries(Gender).map((gender, index) => {
                                    return (
                                        <option value={gender[1]} key={index}>{Utils.getGenderOptions(gender[1])}</option>
                                    );
                                })
                            }
                        </select>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email" value={email} onChange={e => updateField(setEmail, e)} required></input>
                    </InputContainer>

                    <InputContainer>
                        <label>CPF</label>
                        <input value={cpf} onChange={e => updateField(setCpf, e)} required></input>
                    </InputContainer>

                    <InputContainer>
                        <label>Start Date</label>
                        <input type="date" value={start_date} onChange={e => updateField(setStartDate, e)} required></input>
                    </InputContainer>

                    <InputContainer>
                        <label>Team <span>(optional)</span></label>
                        <select value={team} onChange={e => updateField(setTeam, e)} placeholder="Select one team...">
                            {
                                Object.entries(TeamType).map((team, index) => {
                                    return (
                                        <option value={team[1]} key={index}>{Utils.getTeam(team[1])}</option>
                                    );
                                })
                            }
                        </select>
                    </InputContainer>

                    <ButtonsContainer>
                        <CancelButton onClick={props.onRequestClose}>Cancel</CancelButton>
                        <EmployeeButton type="submit"></EmployeeButton>
                    </ButtonsContainer>
                </form>
            </EmployeeDialogContainer>
        </ReactModal>
    );
}

export default EmployeeModal;