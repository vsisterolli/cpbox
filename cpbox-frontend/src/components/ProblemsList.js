import styled from "styled-components"

export default function ProblemsList() {
    return (
        <StyledProblemsListPage>
            <h1>Problems</h1>
            <input type="text" placeholder="Search for name or id"/>
        </StyledProblemsListPage>
    )
}

const StyledProblemsListPage = styled.div`
    background-color: white;
    min-height: 400px;
    width: calc(100vw - 900px);
    margin-top: 40px;
    margin-left: 40px;
    border-radius: 30px;
    border: solid 1px #374151;
    font-family: 'Roboto';
    padding-top: 20px;
    h1 {
        font-size: 36px;
        margin-left: 40px;
    }
    input {
        width: 100%;
        height: 60px;
        margin-top: 40px;
    }
`