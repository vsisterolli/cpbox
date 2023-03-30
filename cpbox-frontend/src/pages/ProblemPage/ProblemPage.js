import ReactMarkdown from 'react-markdown'
import Header from "../../components/Header";
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import { StyledProblemView, StyledProblemPage } from "./ProblemPageStyle";
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you


const markdown = `
Olympus City recently launched the production of personal starships. Now everyone on Mars can buy one and fly to other planets inexpensively.

Each starship has a number —some positive integer x. Let's define the luckiness of a number x as the difference between the largest and smallest digits of that number. For example, $142857$ has $8$ as its largest digit and 1 as its smallest digit, so its luckiness is $8−1=7$. And the number $111$ has all digits equal to $1$, so its luckiness is zero.

Hateehc is a famous Martian blogger who often flies to different corners of the solar system. To release interesting videos even faster, he decided to buy himself a starship. When he came to the store, he saw starships with numbers from l to r inclusively. While in the store, Hateehc wanted to find a starship with the luckiest number.

Since there are a lot of starships in the store, and Hateehc can't program, you have to help the blogger and write a program that answers his question.
![img]https://espresso.codeforces.com/bae36202463d58e4e2df41b76cafa5d805f6f1e8.png "space ship img illustration")
`

const markdown2 = `
Olympus City recently launched the production of personal starships. Now everyone on Mars can buy one and fly to other planets inexpensively.

Each starship has a number —some positive integer x. Let's define the luckiness of a number x as the difference between the largest and smallest digits of that number. For example, $142857$ has $8$ as its largest digit and 1 as its smallest digit, so its luckiness is $8−1=7$. And the number $111$ has all digits equal to $1$, so its luckiness is zero.

Hateehc is a famous Martian blogger who often flies to different corners of the solar system. To release interesting videos even faster, he decided to buy himself a starship. When he came to the store, he saw starships with numbers from l to r inclusively. While in the store, Hateehc wanted to find a starship with the luckiest number.

Since there are a lot of starships in the store, and Hateehc can't program, you have to help the blogger and write a program that answers his question.
![img]https://espresso.codeforces.com/bae36202463d58e4e2df41b76cafa5d805f6f1e8.png "space ship img illustration")
`


export default function ProblemPage() {
    return (
        <>
        <Header/>
        <StyledProblemPage>
            <StyledProblemView>
                <div>
                    <h1>Problem's Name</h1>
                    <h3>1 second time limit / 512kb memory limit</h3>
                    <button>SUBMIT <ion-icon name="paper-plane-outline"></ion-icon></button>
                </div>
                <h2>Description</h2>
                <ReactMarkdown
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                    children={markdown}
                />
                <h2>Input</h2>
                <ReactMarkdown
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                    children={markdown2}
                />
                <h2>Output</h2>
                <ReactMarkdown
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                    children={markdown2}
                />
            </StyledProblemView>
        </StyledProblemPage>
        </>
    )
}