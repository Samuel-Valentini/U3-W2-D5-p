import { BrowserRouter, Route, Routes } from "react-router-dom";
import MNavbar from "./components/MNavbar";
import "./App.css";
import MSearchBar from "./components/MSearchBar";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult";
import getData from "./components/getData";
import HomePlaceholder from "./components/HomePlaceholder";
import NotFound from "./components/NotFound";
import MFootbar from "./components/MFootbar";

function App() {
    const [countryCode, setCountryCode] = useState("IT");
    const [city, setCity] = useState("");
    const [currentData, setCurrentData] = useState("");
    const [forecastData, setForecastData] = useState("");

    const [homeCountryCode, setHomeCountryCode] = useState("IT");
    const [homeCity, setHomeCity] = useState("Roma");
    const [userPositionData, setUserPositionData] = useState(null);
    const [homeCurrentData, setHomeCurrentData] = useState("");

    useEffect(() => {
        getData("https://get.geojs.io/v1/ip/geo.json", setUserPositionData);
    }, []);

    useEffect(() => {
        if (city) {
            const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=123d1880c691cad626a32e7146eb0526`;
            const searchForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&appid=123d1880c691cad626a32e7146eb0526`;

            getData(searchUrl, setCurrentData);
            getData(searchForecastUrl, setForecastData);
        }
    }, [city, countryCode]);

    useEffect(() => {
        const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${homeCity},${homeCountryCode}&units=metric&appid=123d1880c691cad626a32e7146eb0526`;

        getData(searchUrl, setHomeCurrentData);
    }, [homeCity, homeCountryCode]);

    useEffect(() => {
        if (userPositionData) {
            const conCod = userPositionData.country_code || "IT";
            const cit = (userPositionData.city || "Gorizia").trim();

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHomeCountryCode(conCod);
            setHomeCity(cit);
        }
    }, [userPositionData]);

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
                            <>
                                <SearchResult
                                    countryCode={countryCode}
                                    city={city}
                                    currentData={currentData}
                                    forecastData={forecastData}
                                />
                                {homeCity && homeCurrentData ? (
                                    <HomePlaceholder
                                        homeCountryCode={homeCountryCode}
                                        homeCity={homeCity}
                                        homeCurrentData={homeCurrentData}
                                        setCountryCode={setCountryCode}
                                        setCity={setCity}
                                    />
                                ) : (
                                    <div></div>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <SearchResult
                                countryCode={countryCode}
                                city={city}
                                currentData={currentData}
                                forecastData={forecastData}
                            />
                        }
                    />

                    <Route
                        path="/details"
                        element={<h1 className="btn btn-danger">Details</h1>}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <MFootbar />
            </BrowserRouter>
        </>
    );
}

export default App;
