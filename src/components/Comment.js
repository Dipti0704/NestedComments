import React, { useState, useContext } from 'react';
import { CommentContext } from '../context/CommentContext';
import CommentForm from './CommentForm';
import { format } from 'date-fns';

const Comment = ({ comment, level = 0 }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);

  const { addReply, editComment, deleteComment } = useContext(CommentContext);

  const handleReply = (replyData) => {
    addReply(comment.id, replyData.text, replyData.author);
    setIsReplying(false);
  };

  const handleEdit = () => {
    if (editedText.trim()) {
      editComment(comment.id, editedText);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    deleteComment(comment.id);
  };

  const formattedDate = format(new Date(comment.timestamp), "do MMM yyyy");

  return (
    <div className="comment-thread" style={{ marginLeft: `${level * 20}px` }}>
      <div className="comment">
        <div className="comment-header">
          <strong>{comment.author}</strong>
          <span className="comment-date">{formattedDate}</span>
        </div>
        <div className="comment-content">
          {isEditing ? (
            <div className="edit-form">
              <textarea 
                value={editedText} 
                onChange={(e) => setEditedText(e.target.value)}
                required
              />
              <button onClick={handleEdit}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <p>{comment.text}</p>
          )}
        </div>
        <div className="comment-actions">
          <button onClick={() => setIsReplying(!isReplying)}>Reply</button>
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        </div>
        <button onClick={handleDelete} className="delete-button">X</button>
      </div>
      {isReplying && (
        <div className="reply-box">
          <CommentForm onSubmit={handleReply} />
        </div>
      )}
      {comment.replies && comment.replies.map(reply => (
        <Comment key={reply.id} comment={reply} level={level + 1} />
      ))}
    </div>
  );
};

export default Comment;