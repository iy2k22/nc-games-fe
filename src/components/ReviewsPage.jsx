import { getReviews } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import ReviewList from "./ReviewList";
import { useSearchParams } from "react-router-dom";

const ReviewsPage = () => {
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState();
    const [orderBy, setOrderBy] = useState();
    const params = {};
    
    useEffect(() => {
        for (let [key, value] of searchParams) {
            params[key] = value;
        }
        if (sortBy) params["sort_by"] = sortBy;
        if (orderBy) params["order"] = orderBy;
        setLoading(true);
        getReviews(params).then((result) => {
            setLoading(false);
            setReviews(result.reviews);
        })
    }, [sortBy, orderBy]);
    
    return loading ? (<Loading />) : (
        <div className="reviews">
            <ReviewList reviews={reviews} />
            <form className="sort_by">
                <input type="radio" name={sortBy} value="comment_count" onClick={(e) => {
                    setSortBy(e.target.value);
                }} />
                <label>Comment Count</label>

                <input type="radio" name={sortBy} value="votes" onClick={(e) => {
                    setSortBy(e.target.value);
                }} />
                <label>Votes</label>

                <input type="radio" name={sortBy} value="created_at" onClick={(e) => {
                    setSortBy(e.target.value);
                }} />
                <label>Date</label>
            </form>
            <form className="order_by">
                <input type="radio" name={orderBy} value="asc" onClick={(e) => {
                    setOrderBy(e.target.value);
                }} />
                <label>Ascending</label>
                
                <input type="radio" name={orderBy} value="desc" onClick={(e) => {
                    setOrderBy(e.target.value);
                }} />
                <label>Descending</label>
            </form>
        </div>
    );
}

export default ReviewsPage;
