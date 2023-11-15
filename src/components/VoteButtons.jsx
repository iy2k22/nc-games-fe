import { useState } from "react";
import { patchReview } from "../api";

const VoteButtons = ({ id, review_votes }) => {
    const [votes, setVotes] = useState(review_votes);
    const [currentlyVoting, setCurrentlyVoting] = useState(false);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [success, setSuccess] = useState(true);
    
    return (
        <div className="voteButtons">
            <h4 style={{color: (liked || disliked) ? "blue" : "black"}}><i className="fa fa-thumbs-up" aria-hidden="true"></i> {votes}</h4>
            {!currentlyVoting && !disliked ? (<button className="btn btn-primary" type="button" onClick={async () => {
                setCurrentlyVoting(true);
                const result = await patchReview(id, liked);
                setSuccess(result);
                if (result) {
                    setVotes(liked ? votes - 1 : votes + 1);
                    setLiked(!liked);
                }
                setCurrentlyVoting(false);
            }}><i className="fa fa-thumbs-up"></i> {liked ? "Unl" : "L"}ike</button>) : (
                <button className="btn btn-primary" type="button" disabled><i className="fa fa-thumbs-up"></i> {liked ? "Unl" : "L"}ike</button>
            )}
            {!currentlyVoting && !liked ? (<button className="btn btn-primary" type="button" onClick={async () => {
                setCurrentlyVoting(true);
                const result = await patchReview(id, !disliked);
                setSuccess(result);
                if (result) {
                    setVotes(disliked ? votes + 1 : votes - 1);
                    setDisliked(!disliked);
                }
                setCurrentlyVoting(false);
            }}><i className="fa fa-thumbs-down"></i> {disliked ? "Und" : "D"}islike</button>) : (
                <button className="btn btn-primary" type="button" disabled><i className="fa fa-thumbs-down"></i> {disliked ? "Und" : "D"}islike</button>
            )}
            {!success && (<h4 className="err">Vote failed</h4>)}
        </div>
    )
}

export default VoteButtons;