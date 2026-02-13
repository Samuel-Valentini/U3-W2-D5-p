import ShowResult from "./ShowResult";
import WaitingSearch from "./WaitingSearch";

const SearchResult = (props) => {
    return (
        <>
            {props.currentData ? (
                <div>
                    <ShowResult
                        city={props.city}
                        countryCode={props.countryCode}
                        currentData={props.currentData}></ShowResult>
                </div>
            ) : (
                <WaitingSearch></WaitingSearch>
            )}
        </>
    );
};
export default SearchResult;
