import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCategory } from "../api";
import Loading from "./Loading";
import ReviewList from "./ReviewList";

const CategoryReviews = () => {
    const { category } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getReviewsByCategory(category).then((reviewsData) => {
            setLoading(false);
            setReviews(reviewsData.reviews);
        })
    }, [category])
    
    return loading ? (<Loading />) : (<ReviewList reviews={reviews} />);
}

export default CategoryReviews;
