import { createTheme, ThemeProvider } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Home from "./pages/Home/Home";
import ProblemsListPage from "./pages/ProblemsListPage/ProblemsListPage";

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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
