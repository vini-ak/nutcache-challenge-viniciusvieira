import ReactModal from "react-modal";
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
        >
            <DeleteDialogContainer>
                <h3>This action will delete employee Vini. Do you confirm?</h3>
                <p>This action can not be repared and the data will be lost forever.</p>
                <ButtonsContainer>
                    <CancelButton>Cancel</CancelButton>
                    <DeleteButton>Remove</DeleteButton>
                </ButtonsContainer>
            </DeleteDialogContainer>
        </ReactModal>
    );
}

export default DeleteModal;