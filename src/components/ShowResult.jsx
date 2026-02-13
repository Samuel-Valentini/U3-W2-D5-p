import { Alert } from "react-bootstrap";

const ShowResult = (props) => {
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
                </div>
            </Alert>
        </>
    );
};
export default ShowResult;
