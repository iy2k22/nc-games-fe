import { Link } from "react-router-dom";
const { user } = require('../defaults.json');

const Home = () => (
    <section id="home">
        <h2>Welcome, {user}!</h2>
        <p>To get started, visit one of the subpages.</p>
        <ul>
            <li>
                <Link to={'/categories'}>
                    <h3>Categories</h3>
                </Link>
            </li>
            <li>
                <Link to={'/reviews'}>
                    <h3>Reviews</h3>
                </Link>
            </li>
        </ul>
    </section>
);

export default Home;