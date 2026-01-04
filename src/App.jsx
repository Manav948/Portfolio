import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProject from "./pages/AllProject";
import { Header } from "./component/Header";
import "./app.css"
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProject />} />
        <Route path="/about" element={<AboutMe />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
