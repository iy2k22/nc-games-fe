import { deleteComment } from "../api";
import { useState } from "react";

const CommentCard = ({ id, body, author, votes, created_at }) => {
    const [deleted, setDeleted] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [err, setErr] = useState(false);
    return deleted ? (<p>Comment deleted.</p>) : (
        <div>
            <p>{author}</p>
            <p>{body}</p>
            <p>votes: {votes}</p>
            <p>created at: {created_at}</p>
            {!buttonClicked ? <button onClick={async () => {
                setButtonClicked(true);
                setErr(false);
                const result = await deleteComment(id);
                if (result)
                    setDeleted(true);
                else {
                    setButtonClicked(false);
                    setErr(true);
                }
            }}>Delete</button> : <button disabled>Delete</button>}
            {err && <p className="err">Comment could not be deleted.</p>}
        </div>
    )
};

export default CommentCard;
