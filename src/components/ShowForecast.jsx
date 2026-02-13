import { Alert, Col, Row } from "react-bootstrap";

const ShowResult = (props) => {
    let cityName = "";

    if (props.currentData.name) {
        cityName = props.currentData.name
            .toLowerCase()
            .trim()
            .split(/\s+/)
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
    }

    console.log(props.forecast);

    return (
        <>
            <Alert
                key={"waiting"}
                variant="light"
                className="my-3 w-75 mx-auto">
                {props.forecastData ? (
                    <div>
                        <h1>And in the next few days in {cityName}?</h1>
                        <section>
                            <Row>
                                {props.forecastData.list.map((card) => {
                                    const iconLink = `https://openweathermap.org/payload/api/media/file/${card.weather[0].icon}.png`;

                                    return (
                                        <Col
                                            key={card.dt}
                                            className="m-2 border">
                                            <div className="d-flex">
                                                <img
                                                    src={iconLink}
                                                    alt={
                                                        card.weather[0]
                                                            .description
                                                    }
                                                />

                                                <div>
                                                    <strong>
                                                        {" "}
                                                        {new Date(
                                                            card.dt * 1000,
                                                        ).toLocaleString(
                                                            "it-IT",
                                                            {
                                                                timeZone:
                                                                    "Europe/Rome",
                                                                weekday:
                                                                    "short",
                                                                day: "2-digit",
                                                                month: "2-digit",
                                                                year: "numeric",
                                                                hour: "2-digit",
                                                                minute: "2-digit",
                                                            },
                                                        )}{" "}
                                                    </strong>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="fs-6">
                                                    <br />
                                                    {
                                                        card.weather[0].main
                                                    } -{" "}
                                                    {
                                                        card.weather[0]
                                                            .description
                                                    }{" "}
                                                    - temp {card.main.temp} °C -
                                                    feels like{" "}
                                                    {card.main.feels_like} °C
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </section>
                    </div>
                ) : (
                    ""
                )}
            </Alert>
        </>
    );
};
export default ShowResult;
