import styled from "styled-components";

const Container = styled.div`
    display: flex;
`

const StyledProblemsListPage = styled.section`
    @media (max-width: 1400px) {
        flex-direction: column;
        align-items: center;
    }
    width: 100vw;
    min-height: 100vh;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
`;

export {
    StyledProblemsListPage,
    Container
}