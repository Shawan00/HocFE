import { useContext } from "react";
import { menuContext } from "../../App";

function Menu() {
    const data = useContext(menuContext);
    return (
        <>
            <ul className="menu">
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default Menu