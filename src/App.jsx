import { BrowserRouter, Route, Routes } from "react-router-dom";
import MNavbar from "./components/MNavbar";
import "./App.css";
import MSearchBar from "./components/MSearchBar";
import { useState } from "react";

function App() {
    const [countryCode, setCountryCode] = useState("");

    return (
        <>
            <BrowserRouter>
                <MNavbar />
                <MSearchBar
                    countryCode={countryCode}
                    setCountryCode={setCountryCode}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<h1 className="btn btn-danger">Titolo</h1>}
                    />
                    <Route
                        path="/search"
                        element={<h1 className="btn btn-danger">Search</h1>}
                    />
                    <Route
                        path="/faq"
                        element={<h1 className="btn btn-danger">FAQ</h1>}
                    />
                    <Route
                        path="/details"
                        element={<h1 className="btn btn-danger">Details</h1>}
                    />
                    <Route
                        path="*"
                        element={<h1 className="btn btn-danger">404</h1>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
