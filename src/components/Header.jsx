import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <h1>NC Games</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;