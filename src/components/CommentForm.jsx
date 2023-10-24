import { useState } from "react";
import { postComment } from "../api";

const CommentForm = ({ id }) => {
    const [username, setUsername] = useState('');
    const [body, setBody] = useState('');
    const [success, setSuccess] = useState(true);
    const [currentlyPosting, setCurrentlyPosting] = useState(false);
    return (
        <div className="commentForm">
            <form onSubmit={async (e) => {
                e.preventDefault();
                setCurrentlyPosting(true);
                const result = await postComment(id, {
                    "username": username,
                    "body": body
                });
                setSuccess(result);
                setCurrentlyPosting(false);
            }} className="commentForm">
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} required placeholder="Your name here..." onChange={(e) => setUsername(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Body: </label>
                    <textarea id="body" value={body} required placeholder="Your comment here..." onChange={(e) => setBody(e.target.value)} />
                </div>
                <input type="submit" />
            </form>
            {!currentlyPosting && !success ? <p className="err">User {username} is not registered</p> : null}
        </div>
    );
}

export default CommentForm;