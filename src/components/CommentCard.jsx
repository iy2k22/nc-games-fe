import { deleteComment } from "../api";
import { useState } from "react";

const CommentCard = ({ id, body, author, votes, created_at }) => {
    const [deleted, setDeleted] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [err, setErr] = useState(false);
    return deleted ? (<p>Comment deleted.</p>) : (
        <div>
            <p className="commentAuthor">{author}</p>
            <p>{body}</p>
            <div id="likeAndTime">
                <p><i className="fa fa-thumbs-up" aria-hidden="true"></i> {votes}</p>
                <p><i className="fa fa-calendar-o" aria-hidden="true"></i> {created_at}</p>
            </div>
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
            }} className="btn btn-danger"><i className="fa fa-trash"></i> Delete</button> : <button className="btn btn-danger" disabled><i className="fa fa-trash"></i> Delete</button>}
            {err && <p className="err">Comment could not be deleted.</p>}
        </div>
    )
};

export default CommentCard;
