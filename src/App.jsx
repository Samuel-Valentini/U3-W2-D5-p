import { BrowserRouter, Route, Routes } from "react-router-dom";
import MNavbar from "./components/MNavbar";
import "./App.css";
import MSearchBar from "./components/MSearchBar";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult";
import getData from "./components/getData";

function App() {
    const [countryCode, setCountryCode] = useState("IT");
    const [city, setCity] = useState("");
    const [currentData, setCurrentData] = useState("");

    useEffect(() => {
        const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=123d1880c691cad626a32e7146eb0526`;

        getData(searchUrl, setCurrentData);
    }, [city, countryCode]);

    return (
        <>
            <BrowserRouter>
                <MNavbar />
                <MSearchBar
                    countryCode={countryCode}
                    setCountryCode={setCountryCode}
                    city={city}
                    setCity={setCity}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <SearchResult
                                countryCode={countryCode}
                                city={city}
                                currentData={currentData}
                            />
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <SearchResult
                                countryCode={countryCode}
                                city={city}
                                currentData={currentData}
                            />
                        }
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
