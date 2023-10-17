const ReviewCard = ({ owner, title, img, votes, created_at }) => (
    <div className="reviewCard">
        <h2>{title}</h2>
        <h3>by {owner}</h3>
        <img src={img} alt={title} />
        <h4>votes: {votes} created at: {created_at}</h4>
    </div>
)

export default ReviewCard;