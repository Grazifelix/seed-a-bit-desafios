import styled from "styled-components";

export const ButtonStyled = styled.button`
    width: 120px;
    height: 48px;
    background-color: #39528B;
    color: #DBE4F4;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Poppins';
    border-radius: 4px;
    margin-top: 16px;

    &:hover {
        background-color: #395271;
    }

    &:disabled {
        background-color: #8997AC;
    }

`;