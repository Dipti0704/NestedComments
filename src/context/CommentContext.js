import React, { createContext, useState, useEffect } from 'react';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const addComment = (newComment) => {
    setComments(prevComments => [
      ...prevComments,
      {
        id: Date.now(),
        ...newComment,
        timestamp: new Date().toISOString(),
        replies: []
      }
    ]);
  };

  const addReply = (parentId, text, author) => {
    const reply = {
      id: Date.now(),
      author,
      text,
      timestamp: new Date().toISOString(),
      replies: []
    };
    
    setComments(prevComments => {
      const updateReplies = (comments) => {
        return comments.map(comment => {
          if (comment.id === parentId) {
            return { ...comment, replies: [...comment.replies, reply] };
          }
          if (comment.replies.length > 0) {
            return { ...comment, replies: updateReplies(comment.replies) };
          }
          return comment;
        });
      };
      return updateReplies(prevComments);
    });
  };

  const editComment = (id, newText) => {
    setComments(prevComments => {
      const updateCommentText = (comments) => {
        return comments.map(comment => {
          if (comment.id === id) {
            return { ...comment, text: newText };
          }
          if (comment.replies.length > 0) {
            return { ...comment, replies: updateCommentText(comment.replies) };
          }
          return comment;
        });
      };
      return updateCommentText(prevComments);
    });
  };

  const deleteComment = (id) => {
    setComments(prevComments => {
      const removeComment = (comments) => {
        return comments.filter(comment => {
          if (comment.id === id) {
            return false;
          }
          if (comment.replies.length > 0) {
            comment.replies = removeComment(comment.replies);
          }
          return true;
        });
      };
      return removeComment(prevComments);
    });
  };

  const sortComments = (comments) => {
    return [...comments].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .map(comment => ({
        ...comment,
        replies: sortComments(comment.replies)
      }));
  };

  return (
    <CommentContext.Provider value={{ comments: sortComments(comments), addComment, addReply, editComment, deleteComment }}>
      {children}
    </CommentContext.Provider>
  );
};