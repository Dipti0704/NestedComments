import React, { useContext } from 'react';
import { CommentContext } from '../context/CommentContext';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = () => {
  const { comments, addComment } = useContext(CommentContext);

  const sortedComments = [...comments].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return (
    <div className="comment-box">
      <h3>Comments</h3>
      <CommentForm onSubmit={addComment} />
      {sortedComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;