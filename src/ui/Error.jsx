import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
    const error = useRouteError();

    return (
        <div className="flex h-svh flex-col items-center justify-center p-5">
            <h1>Something went wrong 😢</h1>
            <p>{error.data}</p>

            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    );
}

export default Error;
