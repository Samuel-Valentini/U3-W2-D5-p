import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePlaceholder = (props) => {
    const iconLink = `https://openweathermap.org/payload/api/media/file/${props.homeCurrentData.weather?.[0]?.icon}.png`;
    let cityName = "";

    if (props.homeCurrentData.name) {
        cityName = props.homeCurrentData.name
            .toLowerCase()
            .trim()
            .split(/\s+/)
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
    }

    return (
        <>
            <Alert
                key={"waiting"}
                variant="warning"
                className="my-3 w-75 mx-auto">
                <div>
                    <h1>
                        It looks like you're in: {cityName}, {props.countryCode}
                    </h1>
                    <section>
                        <h2>Current Weather</h2>

                        <p>
                            <strong>Coordinates:</strong> lat{" "}
                            {props.homeCurrentData.coord?.lat}°, lon{" "}
                            {props.homeCurrentData.coord?.lon}°<br />
                            <strong>Data time :</strong>{" "}
                            {new Date(
                                (props.homeCurrentData.dt +
                                    props.homeCurrentData.timezone) *
                                    1000,
                            )
                                .toISOString()
                                .replace("T", " ")
                                .slice(0, 16)}{" "}
                            (local) —
                            {new Date(props.homeCurrentData.dt * 1000)
                                .toISOString()
                                .replace("T", " ")
                                .slice(0, 16)}{" "}
                            UTC
                        </p>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
                            <Col className="border border-3 mt-1 d-flex align-items-center justify-content-center">
                                <img
                                    src={iconLink}
                                    alt={
                                        props.homeCurrentData.weather?.[0]?.main
                                    }
                                    className="w-100 my-auto"
                                    onError={(e) =>
                                        (e.currentTarget.src = "/logo.svg")
                                    }
                                />
                            </Col>
                            <Col className="border border-3 mt-1">
                                <h3>Conditions</h3>
                                <ul>
                                    <li>
                                        <strong className="fs-3">
                                            {
                                                props.homeCurrentData
                                                    .weather?.[0]?.main
                                            }{" "}
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {
                                                props.homeCurrentData
                                                    .weather?.[0]?.description
                                            }
                                        </strong>
                                    </li>

                                    <li>
                                        <strong>
                                            {props.homeCurrentData.clouds?.all}%
                                            (cloudiness)
                                        </strong>
                                    </li>
                                </ul>
                            </Col>

                            <Col className="border border-3 mt-1">
                                <h3>Temperature & Humidity </h3>
                                <ul>
                                    <li>
                                        <strong>
                                            {props.homeCurrentData.main?.temp}{" "}
                                            °C (temperature)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {
                                                props.homeCurrentData.main
                                                    ?.feels_like
                                            }{" "}
                                            °C (feels like)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {
                                                props.homeCurrentData.main
                                                    ?.temp_min
                                            }{" "}
                                            °C (min “at the moment”)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {
                                                props.homeCurrentData.main
                                                    ?.temp_max
                                            }{" "}
                                            °C (max “at the moment”)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {
                                                props.homeCurrentData.main
                                                    ?.humidity
                                            }
                                            % (relative humidity)
                                        </strong>
                                    </li>
                                </ul>
                            </Col>

                            <Col className="border border-3 mt-1">
                                <h3>Pressure</h3>
                                <ul>
                                    <li>
                                        <strong>
                                            {
                                                props.homeCurrentData.main
                                                    ?.pressure
                                            }{" "}
                                            hPa (pressure)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {
                                                props.homeCurrentData.main
                                                    ?.sea_level
                                            }{" "}
                                            hPa (sea level pressure)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {
                                                props.homeCurrentData.main
                                                    ?.grnd_level
                                            }{" "}
                                            hPa (ground level pressure)
                                        </strong>
                                    </li>
                                </ul>
                            </Col>

                            <Col className="border border-3 mt-1">
                                <h3>Wind & Visibility</h3>
                                <ul>
                                    <li>
                                        <strong>
                                            wind.speed:{" "}
                                            {props.homeCurrentData.wind?.speed}{" "}
                                            m/s
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.homeCurrentData.wind?.deg}°
                                            (meteorological degrees) — wind
                                            direction
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.homeCurrentData.visibility} m
                                            (max reported is typically 10,000 m)
                                            — visibility
                                        </strong>
                                    </li>
                                </ul>
                            </Col>

                            <Col className="border border-3 mt-1">
                                <h3>Sun & Timezone</h3>
                                <ul>
                                    <li>
                                        <strong>
                                            {new Date(
                                                (props.homeCurrentData.sys
                                                    ?.sunrise +
                                                    props.homeCurrentData
                                                        .timezone) *
                                                    1000,
                                            )
                                                .toISOString()
                                                .replace("T", " ")
                                                .slice(0, 16)}{" "}
                                            (local) —
                                            {new Date(
                                                props.homeCurrentData.sys
                                                    ?.sunrise * 1000,
                                            )
                                                .toISOString()
                                                .replace("T", " ")
                                                .slice(0, 16)}{" "}
                                            UTC
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {new Date(
                                                (props.homeCurrentData.sys
                                                    ?.sunset +
                                                    props.homeCurrentData
                                                        .timezone) *
                                                    1000,
                                            )
                                                .toISOString()
                                                .replace("T", " ")
                                                .slice(0, 16)}{" "}
                                            (local) —
                                            {new Date(
                                                props.homeCurrentData.sys
                                                    ?.sunset * 1000,
                                            )
                                                .toISOString()
                                                .replace("T", " ")
                                                .slice(0, 16)}{" "}
                                            UTC
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.homeCurrentData.timezone} s
                                            (UTC offset in seconds)
                                        </strong>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </section>
                </div>
                <div className="text-center mt-3">
                    <Link
                        className="btn btn-light text-center mx-auto"
                        to="/search"
                        onClick={() => {
                            props.setCity(props.homeCity);
                            props.setCountryCode(props.homeCountryCode);
                        }}>
                        Go to the search details with the weather forecast
                        specification
                    </Link>
                </div>
            </Alert>
        </>
    );
};
export default HomePlaceholder;
