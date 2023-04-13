import Header from "../../components/Header";
import StyledSubmitPage, { StyledInformationDiv } from "./SubmitPageStyle";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import { useState } from "react";
import { minWidth } from "@mui/system";


export default function SubmitPage() {

    const [code, setCode] = useState(`
    // Type your code here:


    #include <bits/stdc++.h>
    using namespace std;

    int main() {

    }
    `);

    return(
        <>
        <Header/>
        <StyledSubmitPage>
            <h1>SUBMIT PAGE</h1>
            <StyledInformationDiv>
                <div>
                    <label for="language-select">Language:</label>
                    <select id="language-select" disabled>
                        <option>C++ 17</option>
                    </select>
                </div>
                <div>
                    <label for="problem-select">Problem ID:</label>
                    <input id="problem-select"></input>
                </div>
            </StyledInformationDiv>
            <h2>Code</h2>
            <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.cpp)}
                padding={10}
                style={{
                    width: 100 + '%',
                    minHeight: 400 + "px",
                    border: "solid 1px black"
                }}
            />
            <button>SUBMIT <ion-icon name="paper-plane-outline"></ion-icon></button>
        </StyledSubmitPage>
        </>
    )
}