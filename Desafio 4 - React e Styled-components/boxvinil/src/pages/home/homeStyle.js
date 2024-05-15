import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #faebd7;
    box-sizing: border-box;
    font-family: "Poppins";
    padding-top: 60px;
    gap: 30px;
    padding: 30px;

    button {
        background-color: #00d000;
        font-size: 18px;
        font-family: 'Poppins';
        padding: 5px 10px 5px 10px;
        border-radius: 10px;
        border-width: 0;
        color: #ffffff;
    }

    h1 {
        font-size: 40px;
    
    }

    h2 {
        font-family: 'Titillium Web';
    }

    nav {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    section {
        width: 100%;
    }

    hr {
        margin: 10 20% 10 20%;
        border-style: dashed;
        border-width: 0.3px;
        color:#00000069;
        width: 50%;
        
    
    }
`;

export const sectionBoxVinil = styled.section`
    margin: 40px 20% 0px 20%;
    background-color: aquamarine;
`