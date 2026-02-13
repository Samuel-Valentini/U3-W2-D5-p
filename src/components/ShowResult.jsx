import { Alert, Col, Row } from "react-bootstrap";

const ShowResult = (props) => {
    const iconLink = `https://openweathermap.org/payload/api/media/file/${props.currentData.weather?.[0]?.icon}.png`;

    return (
        <>
            <Alert
                key={"waiting"}
                variant="success"
                className="my-3 w-75 mx-auto">
                <div>
                    <h1>
                        Result for {props.city}, {props.countryCode}
                    </h1>
                    <section class="owm-result">
                        <h2>Current Weather</h2>

                        <p>
                            <strong>Coordinates:</strong> lat{" "}
                            {props.currentData.coord.lat}°, lon{" "}
                            {props.currentData.coord.lon}°<br />
                            <strong>Data time :</strong>{" "}
                            {new Date(
                                (props.currentData.dt +
                                    props.currentData.timezone) *
                                    1000,
                            )
                                .toISOString()
                                .replace("T", " ")
                                .slice(0, 16)}{" "}
                            (local) —
                            {new Date(props.currentData.dt * 1000)
                                .toISOString()
                                .replace("T", " ")
                                .slice(0, 16)}{" "}
                            UTC
                        </p>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
                            <Col className="border border-3 mt-1 d-flex align-items-center justify-content-center">
                                <img
                                    src={iconLink}
                                    alt={props.currentData.weather?.[0]?.main}
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
                                                props.currentData.weather?.[0]
                                                    ?.main
                                            }{" "}
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {
                                                props.currentData.weather?.[0]
                                                    ?.description
                                            }
                                        </strong>
                                    </li>

                                    <li>
                                        <strong>
                                            {props.currentData.clouds?.all}%
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
                                            {props.currentData.main?.temp} °C
                                            (temperature)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.currentData.main?.feels_like}{" "}
                                            °C (feels like)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.currentData.main?.temp_min}{" "}
                                            °C (min “at the moment”)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.currentData.main?.temp_max}{" "}
                                            °C (max “at the moment”)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.currentData.main?.humidity}%
                                            (relative humidity)
                                        </strong>
                                    </li>
                                </ul>
                            </Col>

                            <Col className="border border-3 mt-1">
                                <h3>Pressure</h3>
                                <ul>
                                    <li>
                                        <strong>
                                            {props.currentData.main?.pressure}{" "}
                                            hPa (pressure)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.currentData.main?.sea_level}{" "}
                                            hPa (sea level pressure)
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.currentData.main?.grnd_level}{" "}
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
                                            {props.currentData.wind?.speed} m/s
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.currentData.wind?.deg}°
                                            (meteorological degrees) — wind
                                            direction
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.currentData.visibility} m
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
                                                (props.currentData.sys
                                                    ?.sunrise +
                                                    props.currentData
                                                        .timezone) *
                                                    1000,
                                            )
                                                .toISOString()
                                                .replace("T", " ")
                                                .slice(0, 16)}{" "}
                                            (local) —
                                            {new Date(
                                                props.currentData.sys?.sunrise *
                                                    1000,
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
                                                (props.currentData.sys?.sunset +
                                                    props.currentData
                                                        .timezone) *
                                                    1000,
                                            )
                                                .toISOString()
                                                .replace("T", " ")
                                                .slice(0, 16)}{" "}
                                            (local) —
                                            {new Date(
                                                props.currentData.sys?.sunset *
                                                    1000,
                                            )
                                                .toISOString()
                                                .replace("T", " ")
                                                .slice(0, 16)}{" "}
                                            UTC
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {props.currentData.timezone} s (UTC
                                            offset in seconds)
                                        </strong>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </section>
                </div>
            </Alert>
        </>
    );
};
export default ShowResult;
