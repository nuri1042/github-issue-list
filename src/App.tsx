import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import IssueDetail from "./pages/IssueDetail";
import IssueList from "./pages/IssueList";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/issue/:id" element={<IssueDetail />} />
        <Route path="/error" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
