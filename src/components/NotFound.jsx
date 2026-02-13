import { Alert } from "react-bootstrap";

const NotFound = () => {
    return (
        <>
            <Alert variant="danger" className="m-3 pt-2 pb-5">
                Oops, this page doesn't exist.
            </Alert>
        </>
    );
};
export default NotFound;
