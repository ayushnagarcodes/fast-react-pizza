import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function Username() {
    const username = useSelector(getUsername);

    return (
        <div className="hidden text-sm font-semibold md:block">{username}</div>
    );
}

export default Username;
