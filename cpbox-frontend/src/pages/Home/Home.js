import {StyledHome, Container} from "./HomeStyle";
import Header from "../../components/Header";
import 'animate.css';
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
        <Header/>
        <StyledHome className="animate__animated animate__fadeInUp">
            <div>
                <Container>
                    <h1>CPBox</h1>
                    <ion-icon name="cube-outline"></ion-icon>
                </Container>
                <h2>Your competitive programming main source!</h2>
            </div>
            <Container>
                <Link to="/problems">Start Training!</Link>
                <Link className="white-button" to="/problems">Start Learning!</Link>
            </Container>
        </StyledHome>
        </>
    )
}