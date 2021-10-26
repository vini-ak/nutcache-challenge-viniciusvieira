import styled from "styled-components";
import * as Variables from '../../../styles/_variables';

export const EmployeeDialogContainer = styled.div`
    width: 40vw;
    padding: 2rem;

    h3 {
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 2rem;
    }

    p {
        text-align: left;
        font-size: 1rem;
        color: ${Variables.GREY};
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    align-items: flex-start;

    & label {
        margin-bottom: .5rem;
        font-weight: bold;

        & span {
            color: ${Variables.GREY};
            font-size: .75rem;
        }
    }

    & input, & select {
        width: 100%;
        padding: .5rem .75rem;
        font-size: 1rem;
    }

    & select {
        width: 60%;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: 2rem;
`;

export const CancelButton = styled.button`
    appearance: none;
    border: solid 2px;
    border-radius: 3px;
    background-color: transparent;
    border-color: ${Variables.SECONDAY_BLUE};
    color: ${Variables.SECONDAY_BLUE};
    font-family: 'Raleway';
    font-size: 1rem;
    font-weight: bold;
    padding: .5rem 3rem;

    &:hover {
        cursor: pointer;
    }
`;

export const EmployeeButton = styled.input.attrs({
    type: "submit",
    value: "Submit",
})`
    appearance: none;
    border: solid 2px transparent;
    border-radius: 3px;
    background-color: ${Variables.BLUE_POOL};
    font-size: 1rem;
    font-weight: bold;
    padding: .5rem 3rem;
    margin-left: 1rem;

    &:hover {
        cursor: pointer;
        background-color: ${Variables.SECONDAY_BLUE};
    }
`;