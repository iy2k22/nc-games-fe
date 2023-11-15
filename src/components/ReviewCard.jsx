import { Link } from "react-router-dom";

const ReviewCard = ({ id, owner, title, img, votes, created_at }) => (
	<div className="card col-lg-3 col-md-3 col-sm-12">
		<img src={img} className="card-img-top" alt={title} />
		<div className="card-body">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">by {owner}</p>
			<p className="card-text"><i className="fa fa-thumbs-up"></i> {votes}</p>
			<p className="card-text"><i className="fa fa-calendar-o"></i> {created_at}</p>
			<Link to={`/reviews/${id}`} className="btn btn-primary">View</Link>
		</div>
	</div>
)

export default ReviewCard;
