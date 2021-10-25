import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
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
    const [employee, setEmployee] = useState(new EmployeeEntity());

    useEffect(() => initModal(), []);

    function initModal() {
        let value = props.employee ? props.employee : new EmployeeEntity();
        setEmployee(value);

        employee;
        debugger;
    }

    // Fields controllers
    const [name, setName] = useState(employee.name);
    const [birth_date, setBirthDate] = useState(employee.birth_date);
    const [gender, setGender] = useState(employee.gender);
    const [email, setEmail] = useState(employee.email);
    const [cpf, setCpf] = useState(employee.cpf);
    const [start_date, setStartDate] = useState(employee.start_date);
    const [team, setTeam] = useState(employee.team);

    function onSubmit() {
        employee.name = name;
        employee.birth_date = birth_date;
        employee.gender = gender;
        employee.email = email;
        debugger;
    }


    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            style={customStyles}
            onAfterOpen={initModal}
        >
            <EmployeeDialogContainer>
                <h3>{props.employee ? "Update employee" : "Create employee"}</h3>
                <form onSubmit={() => onSubmit()}>
                    <InputContainer>
                        <label>Name</label>
                        <input value={name} onChange={(e => setName(e.target.value))}></input>
                    </InputContainer>

                    <InputContainer>
                        <label>Birth Date</label>
                        <input type="date" value={birth_date} onChange={e => setBirthDate(e.target.value)}></input>
                    </InputContainer>

                    <InputContainer>
                        <label>Gender</label>
                        <select value={gender} onChange={e => setGender(e.target.value)}>
                            {
                                Object.entries(Gender).map((gender, index) => {
                                    return (
                                        <option value={gender[0]} key={index}>{Utils.getGenderOptions(gender[1])}</option>
                                    );
                                })
                            }
                        </select>
                    </InputContainer>

                    <InputContainer>
                        <label value={email} onChange={e => setEmail(e.target.value)}>Email</label>
                        <input type="email"></input>
                    </InputContainer>

                    <InputContainer>
                        <label>CPF</label>
                        <input></input>
                    </InputContainer>

                    <InputContainer>
                        <label>Start Date</label>
                        <input type="date"></input>
                    </InputContainer>

                    <InputContainer>
                        <label>Team <span>(optional)</span></label>
                        <select>
                            {
                                Object.entries(TeamType).map((team, index) => {
                                    return (
                                        <option value={team[0]} key={index}>{Utils.getTeam(team[1])}</option>
                                    );
                                })
                            }
                        </select>
                    </InputContainer>

                    <ButtonsContainer>
                        <CancelButton>Cancel</CancelButton>
                        <EmployeeButton onClick={console.log(employee)}></EmployeeButton>
                    </ButtonsContainer>
                </form>
            </EmployeeDialogContainer>
        </ReactModal>
    );
}

export default EmployeeModal;