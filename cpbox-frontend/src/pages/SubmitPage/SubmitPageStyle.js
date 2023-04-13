import styled from "styled-components";

const StyledSubmitPage = styled.section`
    width: 900px;
    margin: 0 auto;
    font-family: 'Roboto';
    textarea {
        min-width: 900px;
        font-size: 20px;
        border: solid 1px black;
    }
    h1 {
        font-size: 36px;
        margin: 40px 0px;
    }   
    button {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1976d2;
        color: #FFFFFF;
        font-family: 'Roboto';
        min-width: 72px;
        font-weight: 700;
        height: 30px;
        font-size: 16px;
        ion-icon {
            margin-left: 8px;
        }
        outline: none;
        border: solid 1px white;
    }
`

export const StyledInformationDiv = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 40px;
    label {
        margin-right: 8px;
    }
    
`

export default StyledSubmitPage;