import styled from "styled-components";
import * as Variables from '../../styles/_variables';

export const HeaderBackground = styled.div`
    width: 100vw;
    background-color: ${Variables.BLUE_POOL};
    height: 20vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    position: relative;

    & > h1 {
        color: ${Variables.GREY};
        font-size: 2rem;
        text-align: center;
        margin: 0 auto;
    }
`

export const CreateEmployeeButton = styled.button`
    border: none;
    border-radius: 2px;
    background-color: ${Variables.RED};
    color: ${Variables.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 40px;
    width: 15rem;
    transition-timing-function: ease-out;
    transition-duration: .2s;

    position: absolute;
    bottom: -20px;

    & > img {
        margin-right: .375rem;
        width: 2rem;
    }

    & > p {
        font-size: 1.125rem;
        font-weight: 500;
    }

    &:hover {
        background-color: ${Variables.SECONDAY_BLUE};
    }
`;