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

	useEffect(() => {
		setLoading(true);
		setCommentLoading(true);
		getReview(review_id).then((review) => {
			setLoading(false);
			setReview(review.review);
			return getComments(review_id);
		}).then((comments) => {
			setCommentLoading(false);
			setComments(comments.comments);
		})
	}, [review_id]);

	return loading ? (<Loading />) : (
		<div className="review">
		<h2>{review.title}</h2>
		<h3>by {review.owner}</h3>
		<img src={review.review_img_url} alt={review.title} />
		<p>{review.review_body}</p>
		<VoteButtons id={review_id} review_votes={review.votes} />
		<h4>created at: {review.created_at}</h4>
		<br />
		{commentLoading ? (<Loading />) : (
			<div className="comments">
			<h3>Comments ({comments.length})</h3>
			<CommentForm id={review_id}/>
			<ul className="commentsList">
			{comments.map((comment) => (
				<li key={comment.comment_id} className="commentCard">
				<CommentCard
				body={comment.body}
				author={comment.author}
				votes={comment.votes}
				created_at={comment.created_at}
				/>
				</li>
			))}
			</ul>
			</div>
		)}
		</div>
	)
}

export default Review;
