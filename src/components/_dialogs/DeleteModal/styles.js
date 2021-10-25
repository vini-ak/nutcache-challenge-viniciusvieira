import styled from "styled-components";
import * as Variables from '../../../styles/_variables';

export const DeleteDialogContainer = styled.div`
    width: 40vw;
    padding: 2rem;

    h3 {
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    p {
        text-align: left;
        font-size: 1rem;
        color: ${Variables.GREY};
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
    border-color: ${Variables.RED};
    color: ${Variables.RED};
    font-family: 'Raleway';
    font-size: 1rem;
    font-weight: bold;
    padding: .5rem 3rem;

    &:hover {
        /* background-color: ${Variables.RED};
        color: ${Variables.WHITE}; */
        cursor: pointer;
    }
`;

export const DeleteButton = styled.button`
    appearance: none;
    border: solid 2px transparent;
    border-radius: 3px;
    background-color: ${Variables.RED};
    font-size: 1rem;
    font-weight: bold;
    padding: .5rem 3rem;
    margin-left: 1rem;
`;