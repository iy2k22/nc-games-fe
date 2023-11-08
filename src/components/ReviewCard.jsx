import { Link } from "react-router-dom";

const ReviewCard = ({ id, owner, title, img, votes, created_at }) => (
/* 	<div className="reviewCard">
		<Link to={`/reviews/${id}`}>
			<h2>{title}</h2>
		</Link>
		<h3>by {owner}</h3>
		<img src={img} alt={title} />
		<h4>votes: {votes}</h4>
		<h4>created at: {created_at}</h4>
	</div> */
	<div className="card">
		<img src={img} className="card-img-top" alt={title} />
		<div className="card-body">
			<h5 className="card-title">{title}</h5>
			<p className="card-text"><i className="fa fa-thumbs-up"></i> {votes}</p>
			<p className="card-text"><i className="fa fa-clock-o"></i> {created_at}</p>
			<Link to={`/reviews/${id}`} className="btn btn-primary">View</Link>
		</div>
	</div>
)

export default ReviewCard;
