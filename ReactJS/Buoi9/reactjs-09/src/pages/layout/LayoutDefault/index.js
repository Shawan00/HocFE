import { Link, Outlet } from "react-router-dom";
import GoBack from "../../../components/GoBack";

function LayoutDefault() {
    return (
        <>
            <header>
                Logo
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/sjkalf">Erorr404</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </header>
            <div className="main-content">
                <GoBack/>
                
                {/* Giao diện của các page Home, contact... sẽ hiển thị ở đây */}
                <Outlet/>
            </div>
            <footer>Copyright</footer>
        </>
    );
}

export default LayoutDefault