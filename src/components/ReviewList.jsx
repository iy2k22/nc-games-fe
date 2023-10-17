import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => (
	<ul className="reviewList">
	{reviews.map((review) => (
		<li key={review.title}>
		<ReviewCard
		owner={review.owner}
		title={review.title}
		votes={review.votes}
		img={review.review_img_url}
		created_at={review.created_at}
		id={review.review_id}
		/>
		</li>
	))}
	</ul>
);

export default ReviewList;
