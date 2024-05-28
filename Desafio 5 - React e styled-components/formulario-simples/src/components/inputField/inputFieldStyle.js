import styled from "styled-components";


export const DivInputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-bottom: 1rem;

`;

export const Label = styled.label`
    font-family: 'poppins', 'arial';
    font-size: 1rem;
    font-weight: 700;
    color: #38548C;
`;

export const Input = styled.input`
    
    height: 3rem;
    border: 2px solid #CBCED2;
    border-radius: 0.25rem;
    background-color: #F2F6FF;

    font-family: 'poppins', "arial";
    font-size: 1rem;
    padding: 0.5rem;
    color: #93A3C2;

    &:disabled {
        
        background-color: #8997AC;
    }

    &::placeholder {
        color: #C4CCD9;
    }

    @media (min-width: 500px ) {
        width: 25rem;
    }

    @media (min-width: 1024px) {
        width: 50rem;
    }

    @media (min-width: 2560px){
        width: 100rem;
    }
`;