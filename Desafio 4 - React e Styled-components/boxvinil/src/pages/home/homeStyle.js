import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #faebd7;
    box-sizing: border-box;
    font-family: "Poppins";
    padding-top: 3.75rem;
    gap: 1.87rem;
    padding: 1.87rem;

    button:hover {
          background-color: #000000;
        }

    h1 {
        font-size: 2.5rem;
    
    }

    h2 {
        font-family: 'Titillium Web';
    }

    nav {
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
    }

    hr {
        margin: 0.625rem 20% 0.625rem 20%;
        border-style: dashed;
        border-width: 0.3px;
        color:#00000069;
        width: 50%;
        
    
    }
`;

export const SectionBoxVinil = styled.section`
    padding: 1.25rem 20%;
    
    p {
        font-size: 1.25rem;
    }

`

export const SectionAlbums = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonMenu = styled.section`
        background-color: #00d000;
        font-size: 1.1rem;
        font-family: 'Poppins';
        padding: 0.3rem 0.625rem 0.3rem 0.625rem;
        border-radius: 0.625rem;
        border-width: 0;
        color: #ffffff;

        &:hover {
          background-color: #000000;
        }

`

export const ButtonBuy = styled(ButtonMenu)`
    padding: 0.3rem 1.25rem 0.3rem 1.25rem;
    width: 10%;
    margin-top: 1.25rem;
    text-transform: uppercase;

`