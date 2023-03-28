import { useRef, useState } from "react"
import styled from "styled-components"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function ProblemSearchOptions() {
    
    const abortController = useRef(null);
    let tagsValue = [];

    const options = ['Alohomora', 'Wingardium Leviosa', 'Sectumsempra'];

    return(
        <OptionsBar>
            <h1>Filter</h1>
            <h2>Difficulty Level</h2>
            <Container>
                <button name="Basic" className="basic">Basic</button>
                <button name="Medium" className="medium">Medium</button>
                <button name="Advanced" className="advanced">Advanced</button>
            </Container>
            <h2>Status</h2>
            <Container>
                <button name="Solved" className="basic">Solved</button>
                <button name="Tryied" className="medium">Tryied</button>
                <button name="Unsolved" className="advanced">Unsolved</button>
            </Container>
            <h2>Problem Tags</h2>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={options}
                getOptionLabel={(option) => option}
                defaultValue={[]}
                limitTags={3}
                filterSelectedOptions
                sx = {{
                    marginTop: "20px"
                }}
                onChange={(event, value) => tagsValue = value}
                renderInput={(params) => (
                <TextField
                    {...params}
                    value={tagsValue}
                    label="problemTags"
                    placeholder="problemTags"
                />
                )}
            />
        </OptionsBar>
    )
}

const OptionsBar = styled.aside`
    background-color: white;
    height: 600px;
    width: 420px;
    margin-top: 40px;
    border-radius: 30px;
    border: solid 1px #374151;
    padding: 20px;
    font-family: 'Roboto';
    h1 {
        font-size: 36px;
    }
    h2 {
        margin-top: 20px;
        font-size: 24px;
    }
    
    .advanced {
        background-color: #d50000;
    }
    .medium {
        background-color: #f4511e;
    }
    .basic {
        background-color: #1b5e20;
    }
    .basic, .medium, .advanced {
        width: 120px;
        height: 36px;
        font-family: 'Roboto';
        font-size: 18px;
        color: #FFFFFF;
        font-weight: 700;
        outline: none;
        margin: 8px;
        border: none;
        :hover {
            border: solid 2px black;
            cursor: pointer;
        }
    }
`

const Container = styled.div`
    display: flex;
    margin: 8px;
`