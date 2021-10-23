import styled from "styled-components";
import * as Variables from '../../styles/_variables';

export const FooterContent = styled.footer`
    width: 100vw;
    position: relative;
    bottom: 0;
    left: 0;
    background-color: ${Variables.RED};
    padding: .5vh 0;
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    color: ${Variables.WHITE};
`;