import { Link } from "react-router-dom";

const ReviewCard = ({ id, owner, title, img, votes, created_at }) => (
	<div className="reviewCard">
		<Link to={`/reviews/${id}`}>
			<h2>{title}</h2>
		</Link>
		<h3>by {owner}</h3>
		<img src={img} alt={title} />
		<h4>votes: {votes}</h4>
		<h4>created at: {created_at}</h4>
	</div>
)

export default ReviewCard;
