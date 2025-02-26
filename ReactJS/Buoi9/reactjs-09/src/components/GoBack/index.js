import { useNavigate } from "react-router-dom";

function GoBack() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }
    return (
        <div>
            <button onClick={handleClick}>Back</button>
        </div>
    );
}

export default GoBack