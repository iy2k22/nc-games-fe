import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
	const reviewsSplit = [];
	for (let i = 0; i < reviews.length; i += 3)
		reviewsSplit.push(reviews.slice(i, i + 3));
	return reviewsSplit.map((reviews) => (
		<div className="row justify-content-around" id="reviewsRow">
			{reviews.map((review) => (
				<ReviewCard
					owner={review.owner}
					title={review.title}
					votes={review.votes}
					img={review.review_img_url}
					created_at={review.display_date}
					id={review.review_id}
				/>
			))}
		</div>
	))
}

export default ReviewList;
