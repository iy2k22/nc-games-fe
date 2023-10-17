import { getReviews } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import ReviewCard from "./ReviewCard";

const ReviewList = () => {
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        getReviews().then((result) => {
            setLoading(false);
            setReviews(result.reviews);
        })
    }, [])
    
    return loading ? (<Loading />) : (
        <ul className="reviewList">
            {reviews.map((review) => (
                <li key={review.title}>
                    <ReviewCard
                    owner={review.owner}
                    title={review.title}
                    votes={review.votes}
                    img={review.review_img_url}
                    created_at={review.created_at}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ReviewList;