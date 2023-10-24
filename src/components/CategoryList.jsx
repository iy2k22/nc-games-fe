import { useState, useEffect } from "react";
import Loading from "./Loading";
import { getCategories } from "../api";
import { Link } from "react-router-dom";

const CategoryList = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        getCategories().then((categoryData) => {
            setLoading(false);
            setCategories(categoryData.categories);
        })
    }, [])
    
    return loading ? (<Loading />) : (
        <ul className="categories">
            {categories.map((category) => (
                <li key={category.slug}>
                    <Link to={`/reviews?category=${category.slug}`}>
                        <h2>{category.slug}</h2>
                    </Link>
                    <h3>{category.description}</h3>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList;