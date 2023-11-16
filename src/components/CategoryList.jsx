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
        <ul className="categories container block">
            {categories.map((category) => (
                <li key={category.slug} className="row align-items-center category">
                    <Link to={`/reviews?category=${category.slug}`} className="col-lg-6 col-md-6 col-sm-4">
                        <h2>{category.display_name}</h2>
                    </Link>
                    <h3 className="col-lg-4 col-md-4 col-sm-4">{category.description}</h3>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList;