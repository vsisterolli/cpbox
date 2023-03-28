import Header from "../../components/Header";
import { StyledProblemsListPage } from "./ProblemsListPageStyle";
import ProblemSearchOptions from "../../components/ProblemSearchOptions";
import ProblemsList from "../../components/ProblemsList";

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