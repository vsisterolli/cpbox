import Pagination from '@mui/material/Pagination';
import styled from "styled-components"
import ProblemListTable from './ProblemListTable';

export default function ProblemsList() {
    
    return (
        <StyledProblemsList>
            <h1>Problems</h1>
            <input type="text" placeholder="Search for name, id, author or source"/>
            <ProblemListTable/>
            <div className='pagination-div'>
                <Pagination count={10}/>
            </div>
        </StyledProblemsList>
    )
}

const StyledProblemsList = styled.div`
    @media (max-width: 1400px) {
        width: 100%;
        margin-left: 0px;
    }
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
        margin-top: 20px;
        margin-left: 40px;
    }
    .pagination-div {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input {
        width: 100%;
        height: 60px;
        margin-top: 20px;
        border-radius: 8px;
        outline: none;
        border: solid 4px #e0e0e0;
        background-color: #b3e5fc;
        padding: 20px;
        color: black;
        font-family: 'Roboto';
        font-size: 24px;
        ::placeholder {
            color: #757575;
            font-family: 'Roboto';
            font-size: 16px;
        }
    }
    table {
        margin-top: 30px;
        width: 100%;
        th, td {
            font-size: 'Roboto';
            font-size: 14px;
            height: 40px;
            border: solid 2px #eceff1;
            text-align: center;
            vertical-align: middle;
        }
        thead {
            th {
                background-color: #1976d2;
                color: #FFFFFF;
            }
        }
    }

`