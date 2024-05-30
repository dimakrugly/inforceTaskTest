import React from 'react';
import {CommentType} from "../../store/reducer/commentSlice";

interface CommentsProps {
    comments: CommentType[];
}

const Comments: React.FC<CommentsProps> = ({comments}) => {
    return (
        <div className="comments-container">
            <h2>Comments</h2>
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <p><strong>Date:</strong> {comment.date}</p>
                    <p>{comment.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;
