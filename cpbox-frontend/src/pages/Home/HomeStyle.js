import styled from "styled-components";

const Container = styled.div`
    display: flex;
`

const StyledHome = styled.section`
    width: 99vw;
    height: 99vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1, ion-icon {
        font-family: Helvetica;
        color: #d500f9;
        font-size: 6.8em;
        letter-spacing: 0.3rem;
    }
    ion-icon {
        margin-left: 20px;
    }
    h2 {
        font-size: 1.6em;
        color: #374151;
        font-family: 'Roboto';
        padding-left: 10px;
    }
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 240px;
        margin: 10px;
        height: 70px;
        color: #FFFFFF;
        font-family: 'Roboto';
        font-size:  1.8em;
        background-color: #d500f9;
        border-radius: 80px;
        outline: white;
        margin-top: 30px;
    }
    .white-button {
        background-color: #FFFFFF;
        color: #d500f9;
        border: solid 4px #d500f9;
    }
`;

export {
    StyledHome,
    Container
}