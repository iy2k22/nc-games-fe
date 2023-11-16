import { getReviews } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import ReviewList from "./ReviewList";
import { useSearchParams } from "react-router-dom";

const ReviewsPage = () => {
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [empty, setEmpty] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const params = {};
    
    useEffect(() => {
        for (let [key, value] of searchParams) {
            params[key] = value;
        }
        setLoading(true);
        getReviews(params).then((result) => {
            setLoading(false);
            if (result.reviews.length === 0) 
                setEmpty(true);
            setReviews(result.reviews);
        })
    }, []);
    
    return loading ? (<Loading />) : (
        <section className="reviews">
            <ReviewList reviews={reviews} />
            {!empty ? (<form id="reviewSort">
                <div className="formSection">
                    <label>Sort by:</label>
                    <span className="pair">
                        <input type="radio" id="comment_count" name="sort_by" value="comment_count" />
                        <label for="comment_count">Comment Count</label>
                    </span>
                    <span className="pair">
                        <input type="radio" id="date" name="sort_by" value="created_at" />
                        <label for="date">Date</label>
                    </span>
                    <span className="pair">
                        <input type="radio" id="votes" name="sort_by" value="votes" />
                        <label for="votes">Votes</label>
                    </span>
                </div>
                <div className="formSection">
                    <label>Order:</label>
                    <span className="pair">
                        <input type="radio" id="ascending" name="order" value="asc" />
                        <label for="ascending">Ascending</label>
                    </span>
                    <span className="pair">
                        <input type="radio" id="descending" name="order" value="desc" />
                        <label for="descending">Descending</label>
                    </span>
                </div>
                <input type="submit" value="Resort" id="sortButton" className="btn btn-primary" />
            </form>) : null}
        </section>
    );
}

export default ReviewsPage;
