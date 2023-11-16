import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReview, getComments } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import VoteButtons from "./VoteButtons";

const Review = () => {
	const { review_id } = useParams();
	const [loading, setLoading] = useState(false);
	const [commentLoading, setCommentLoading] = useState(false);
	const [review, setReview] = useState({});
	const [comments, setComments] = useState([]);
	const [err, setErr] = useState(false);

	useEffect(() => {
		setLoading(true);
		setCommentLoading(true);
		getReview(review_id).then((review) => {
			setLoading(false);
			if (review === false)
				return Promise.reject("couldn't load review");
			setReview(review.review);
			return getComments(review_id);
		}).then((comments) => {
			setCommentLoading(false);
			setComments(comments.comments);
		}).catch(() => {
			setErr(true);
		});
	}, [review_id]);

	return loading ? (<Loading />) : err ? (<h1 className="err">Error: could not load review</h1>) : (
		<section className="review">
			<div className="block" id="reviewBody">
				<h2>{review.title}</h2>
				<h3>by {review.owner}</h3>
				<h4><i className="fa fa-calendar-o" aria-hidden="true"></i> {review.display_date}</h4>
				<img src={review.review_img_url} alt={review.title} />
				<p>{review.review_body}</p>
			</div>
				<VoteButtons id={review_id} review_votes={review.votes} />
			<br />
			{commentLoading ? (<Loading />) : (
				<div id="comments" className="block">
					<h3>Comments ({comments.length})</h3>
					<CommentForm id={review_id} />
					<ul className="commentsList">
						{comments.map((comment) => (
							<li key={comment.comment_id} className="commentCard">
								<CommentCard
									id={comment.comment_id}
									body={comment.body}
									author={comment.author}
									votes={comment.votes}
									created_at={comment.display_date}
								/>
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	)
}

export default Review;
