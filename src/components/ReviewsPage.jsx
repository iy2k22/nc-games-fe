import { getReviews } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import ReviewList from "./ReviewList";

const ReviewsPage = () => {
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        getReviews().then((result) => {
            setLoading(false);
            setReviews(result.reviews);
        })
    }, [])
    
    return loading ? (<Loading />) : (<ReviewList reviews={reviews} />);
}

export default ReviewsPage;
