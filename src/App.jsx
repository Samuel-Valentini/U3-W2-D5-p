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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
