import { useState } from "react";
import { postComment } from "../api";
const { user } = require('../defaults.json');

const CommentForm = ({ id }) => {
    const [body, setBody] = useState('');
    const [success, setSuccess] = useState(false);
    const [err, setErr] = useState(false);
    const [currentlyPosting, setCurrentlyPosting] = useState(false);
    console.log(user);
    return (
        <div className="commentForm">
            <form onSubmit={async (e) => {
                e.preventDefault();
                setSuccess(false);
                setErr(false);
                setCurrentlyPosting(true);
                const result = await postComment(id, {
                    "username": user,
                    "body": body
                });
                const resultFunc = result ? setSuccess : setErr;
                resultFunc(true);
                setCurrentlyPosting(false);
            }} className="commentForm">
                <div>
                    <label>Comment: </label>
                    <textarea id="body" value={body} required placeholder="Your comment here..." onChange={(e) => setBody(e.target.value)} />
                </div>
                {!currentlyPosting ? (<input type="submit" className="btn btn-success" id="submitBtn" />) : (<input type="submit" className="btn btn-success" id="submitBtn" disabled />)}
            </form>
            {!currentlyPosting && success ? <p>Comment posted.</p> : null}
            {!currentlyPosting && err ? <p className="err">Comment could not be posted</p> : null}
        </div>
    );
}

export default CommentForm;