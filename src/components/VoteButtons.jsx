import { useState } from "react";
import { patchReview } from "../api";

const VoteButtons = ({ id, review_votes }) => {
    const [votes, setVotes] = useState(review_votes);
    const [currentlyVoting, setCurrentlyVoting] = useState(false);
    const [likeClicked, setLikeClicked] = useState(false);
    const [dislikeClicked, setDislikeClicked] = useState(false);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [success, setSuccess] = useState(true);
    
    return (
        <div className="voteButtons">
            <h4>Like: {votes}</h4>
            {!currentlyVoting && !disliked ? (<button type="button" onClick={async () => {
                setCurrentlyVoting(true);
                setLikeClicked(true);
                const result = await patchReview(id, liked);
                setSuccess(result);
                if (result) {
                    setVotes(liked ? votes - 1 : votes + 1);
                    setLiked(!liked);
                } else {
                    setLikeClicked(false);
                }
                setCurrentlyVoting(false);
            }}>{liked ? "Unl" : "L"}ike</button>) : (
                <button type="button" disabled>{liked ? "Unl" : "L"}ike</button>
            )}
            {!currentlyVoting && !liked ? (<button type="button" onClick={async () => {
                setCurrentlyVoting(true);
                setDislikeClicked(true);
                const result = await patchReview(id, !disliked);
                setSuccess(result);
                if (result) {
                    setVotes(disliked ? votes + 1 : votes - 1);
                    setDisliked(!disliked);
                } else {
                    setDislikeClicked(false);
                }
                setCurrentlyVoting(false);
            }}>{disliked ? "Und" : "D"}islike</button>) : (
                <button type="button" disabled>{disliked ? "Und" : "D"}islike</button>
            )}
            {!success && (<h4 className="err">Vote failed</h4>)}
        </div>
    )
}

export default VoteButtons;