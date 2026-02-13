import { Alert } from "react-bootstrap";

const WaitingSearch = () => {
    return (
        <>
            <Alert
                key={"waiting"}
                variant="success"
                className="my-3 w-75 mx-auto">
                Search for a municipality to view the results here.
            </Alert>
        </>
    );
};
export default WaitingSearch;
