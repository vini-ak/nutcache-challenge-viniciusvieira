import { useState } from "react";
import ReactModal from "react-modal";
import { ApiService } from "../../../data/api";
import { ButtonsContainer, CancelButton, DeleteButton, DeleteDialogContainer } from "./styles";

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

function DeleteModal(props) {

    return (
        <ReactModal 
            style={customStyles} 
            contentLabel="Remove Employee"
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            onAfterClose={props.onAfterClose}
        >
            <DeleteDialogContainer>
                <h3>This action will delete employee {props.employee ? props.employee.name : ''}. Do you confirm?</h3>
                <p>This action can not be repared and the data will be lost forever.</p>
                <ButtonsContainer>
                    <CancelButton onClick={props.onRequestClose}>Cancel</CancelButton>
                    <DeleteButton onClick={props.onDelete} >Remove</DeleteButton>
                </ButtonsContainer>
            </DeleteDialogContainer>
        </ReactModal>
    );
}

export default DeleteModal;