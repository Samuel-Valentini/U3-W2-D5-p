import ShowResult from "./ShowResult";
import ShowForecast from "./ShowForecast";
import WaitingSearch from "./WaitingSearch";
import { Link, useLocation } from "react-router-dom";
import { Alert } from "react-bootstrap";

const SearchResult = (props) => {
    const location = useLocation();
    return (
        <>
            {props.city && props.currentData ? (
                <div>
                    <ShowResult
                        city={props.city}
                        countryCode={props.countryCode}
                        currentData={props.currentData}
                    />
                    {location.pathname === "/search" ||
                    location.pathname === "/search/" ? (
                        <ShowForecast
                            city={props.city}
                            countryCode={props.countryCode}
                            currentData={props.currentData}
                            forecastData={props.forecastData}
                        />
                    ) : (
                        ""
                    )}
                    {location.pathname === "/" ? (
                        <div className="text-center">
                            <Alert variant="success w-75 mx-auto">
                                <Link
                                    className="btn btn-light text-center mx-auto"
                                    to="/search">
                                    Go to the search details with the weather
                                    forecast specification
                                </Link>
                            </Alert>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                <WaitingSearch></WaitingSearch>
            )}
        </>
    );
};
export default SearchResult;
