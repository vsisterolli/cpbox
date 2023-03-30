import styled from "styled-components";

const StyledProblemPage = styled.section`
    @media (max-width: 1400px) {
        flex-direction: column;
        align-items: center;
    }
    width: 100vw;
    min-height: 100vh;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
`

const StyledProblemView = styled.div`
    @media (max-width: 1200px) {
        width: 100%;
        margin-left: 0px;
    }
    white-space: pre-wrap;
    background-color: white;
    min-height: 400px;
    width: 1200px;
    margin-top: 40px;
    border-radius: 30px;
    border: solid 1px #374151;
    font-family: 'Roboto';
    padding: 40px 60px;

    font-family: 'Roboto';
    font-size: 18px;
    h1 {
        font-size: 36px;
    }
    h2 {
        margin-top: 40px;
    }
    strong {
        font-weight: 700;
    }
    em {
        font-style: italic;
    }
    img {
        margin: 0 auto;
    }
    h2 {
        font-size: 36px;
        margin-bottom: 20px;
    }
    div {
        display: flex;   
        margin-bottom: 80px;
        align-items: center;
        justify-content: space-between;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1976d2;
        color: #FFFFFF;
        font-family: 'Roboto';
        min-width: 142px;
        font-weight: 700;
        height: 48px;
        font-size: 32px;
        ion-icon {
            margin-left: 8px;
        }
        outline: none;
        border: solid 1px white;
    }

`

export {
    StyledProblemPage,
    StyledProblemView
};