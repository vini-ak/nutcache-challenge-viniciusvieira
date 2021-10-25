import styled from 'styled-components';
import * as Variables from '../../styles/_variables';

export const LoadingContainer = styled.div`
    margin: 12vh auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EmployeesTable = styled.table`
    border: none;
    width: 100%;
    max-width: ${Variables.MAX_WIDTH};
    margin: 7rem auto;
    border-collapse: collapse;
`;

export const EmployeesTHead = styled.thead`

    & > tr {
        border: none;
        text-align: left;
        font-size: 1.25rem;
        font-weight: bold;

        & > th {
            padding-bottom: 1.25rem;

            &:last-child {
                text-align: end;
                padding-right: 3rem;
            }

            &:first-child {
                padding-left: 2.5rem;
            }
        }
    }
`
export const EmployeesTBody = styled.tbody`

    & tr:hover td {
        background-color: ${Variables.BLUE_POOL};
    }

    & td {
        padding: .75rem 0;
        border-bottom: solid 1px ${Variables.LIGHT_GREY};
        border: none;

        &:first-child {
            padding-left: 2.5rem;
            border-radius: 5px 0 0 5px;
        }

        &:last-child  {
            display: flex;
            justify-content: flex-end;
            padding-right: 2.5rem;
            border-radius: 0 5px 5px 0;
        }
    }
`

export const DeleteEmployeeButton = styled.button`
    background-color: ${Variables.RED};
    border: none;
    padding: 0.25rem;
    margin: 0 .25rem;
    border-radius: 1px;

    &:hover {
        cursor: pointer;
    }
`
export const UpdateEmployeeButton = styled.button`
    background-color: ${Variables.SECONDAY_BLUE};
    border: none;
    padding: 0.25rem;
    margin: 0 .25rem;
    border-radius: 1px;

    &:hover {
        cursor: pointer;
    }
`