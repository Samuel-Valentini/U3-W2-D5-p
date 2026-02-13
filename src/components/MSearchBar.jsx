import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { countries } from "./constants";

const MSearchBar = (props) => {
    const selectedCountry = countries.find(
        ([, code]) => code === props.countryCode,
    );

    const selectedLabel = selectedCountry ? selectedCountry[0] : "Country";

    return (
        <>
            <div className="bg-secondary py-4">
                <Container>
                    <InputGroup className="">
                        <Form.Control
                            placeholder="Look for a place... "
                            aria-label="Look for a place"
                            aria-describedby="look-for-a-place"
                        />
                        <DropdownButton
                            id="select-country"
                            title={selectedLabel}
                            onSelect={(code) => props.setCountryCode(code)}
                            variant="light">
                            <div style={{ maxHeight: 300, overflowY: "auto" }}>
                                {countries.map(([name, code]) => (
                                    <Dropdown.Item
                                        key={code}
                                        eventKey={code}
                                        active={props.countryCode === code}
                                        as="button"
                                        type="button">
                                        {name}
                                    </Dropdown.Item>
                                ))}
                            </div>
                        </DropdownButton>
                    </InputGroup>
                </Container>
            </div>
        </>
    );
};
export default MSearchBar;
