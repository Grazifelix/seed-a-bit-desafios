import styled from "styled-components";

export const ButtonStyled = styled.button`
    width: 7.5rem;
    height: 3rem;
    background-color: #39528B;
    color: #DBE4F4;
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Poppins';
    border-radius: 0.25rem;
    margin-top: 1rem;

    &:hover {
        background-color: #395271;
    }

    &:disabled {
        background-color: #8997AC;
    }

    @media (min-width: 2560px){
        width: 25rem;
    }

`;