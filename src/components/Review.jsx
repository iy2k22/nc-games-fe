import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReview, getComments, patchReview } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";

const Review = () => {
	const { review_id } = useParams();
	const [loading, setLoading] = useState(false);
	const [commentLoading, setCommentLoading] = useState(false);
	const [review, setReview] = useState({});
	const [comments, setComments] = useState([]);
	const [votes, setVotes] = useState(0);
	const [currentlyVoting, setCurrentlyVoting] = useState(false);
	const [voted, setVoted] = useState(false);
	const [voteSuccessful, setVoteSuccessful] = useState(true);

	useEffect(() => {
		setLoading(true);
		setCommentLoading(true);
		getReview(review_id).then((review) => {
			setLoading(false);
			setReview(review.review);
			setVotes(review.review.votes);
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
		<h4>votes: {votes}</h4>
		{currentlyVoting ? (<button type="button" disabled>{voted && "un"}voting...</button>) : (<button type="button" onClick={async () => {
			setCurrentlyVoting(true);
			const result = await patchReview(review_id, voted);
			setVoteSuccessful(result);
			if (result) {
				setVotes(voted ? votes - 1 : votes + 1);
				setVoted(!voted);
			}
			setCurrentlyVoting(false);
		}}>{voted && "un"}vote</button>)}
		{!currentlyVoting && !voteSuccessful ? (<h4 className="err">vote failed</h4>) : null}
		<h4>created at: {review.created_at}</h4>
		<br />
		{commentLoading ? (<Loading />) : (
			<div className="comments">
			<h3>Comments ({comments.length})</h3>
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
