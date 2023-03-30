import Header from "../../components/Header";
import { StyledProblemsListPage } from "./ProblemsListPageStyle";
import ProblemSearchOptions from "../../components/ProblemListPage/ProblemSearchOptions";
import ProblemsList from "../../components/ProblemListPage/ProblemsList";

export default function ProblemsListPage() {
    return(
        <>
        <Header/>
        <StyledProblemsListPage>
            <ProblemSearchOptions/>
            <ProblemsList/>
        </StyledProblemsListPage>
        </>
    )
}