import { createTheme, ThemeProvider } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Home from "./pages/Home/Home";
import ProblemPage from "./pages/ProblemPage/ProblemPage";
import ProblemsListPage from "./pages/ProblemsListPage/ProblemsListPage";
import SubmitPage from "./pages/SubmitPage/SubmitPage";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: purple[700]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/problems' element={<ProblemsListPage/>}/>
          <Route path='/problem/:id' element={<ProblemPage/>}/>
          <Route path='/submit' element={<SubmitPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
