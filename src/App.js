import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/HomePage/Home";
import {BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes element>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/404" element={<ErrorPage/>} />
        <Route path="*" element={ <Navigate to="/404" replace />}/>

      </Routes>

    </BrowserRouter>

      {/* (
        localStorage.getItem("users") == undefined ||
          localStorage.getItem("users") == null
      ) ? (
        <LoginPage />
      ) : (
        <Home />
       ) */}
    </div>
  );
}

export default App;
