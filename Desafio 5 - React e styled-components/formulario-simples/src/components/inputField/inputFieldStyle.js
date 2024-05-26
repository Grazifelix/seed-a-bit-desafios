import styled from "styled-components";


export const DivInputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 16px;

`;

export const Label = styled.label`
    font-family: 'poppins', 'arial';
    font-size: 16px;
    font-weight: 700;
    color: #38548C;
`;

export const Input = styled.input`
    width: 800px;
    height: 48px;
    border: 2px solid #CBCED2;
    border-radius: 4px;
    background-color: #F2F6FF;

    font-family: 'poppins', "arial";
    font-size: 16px;
    padding: 8px;
    color: #93A3C2;

    &:disabled {
        
        background-color: #8997AC;
    }

    &::placeholder {
        color: #C4CCD9;
    }
`;