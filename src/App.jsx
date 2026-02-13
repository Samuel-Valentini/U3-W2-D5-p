import { BrowserRouter, Route, Routes } from "react-router-dom";
import MNavbar from "./components/MNavbar";
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <MNavbar />
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
