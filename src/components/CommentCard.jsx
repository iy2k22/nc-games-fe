const CommentCard = ({ body, author, votes, created_at }) => (
    <div className="commentCard">
        <p>{author}</p>
        <p>{body}</p>
        <p>votes: {votes}</p>
        <p>created at: {created_at}</p>
    </div>
)

export default CommentCard;