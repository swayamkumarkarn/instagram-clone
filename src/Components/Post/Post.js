import React, { useState, useEffect } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import love from '../../images/love.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg';

const Post = (props) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    let data = [
      {
        username: 'Anubhav',
        commentId: '1234',
        timeStamp: '123456',
        description: 'Comment 1',
      },
      {
        username: 'anuragini',
        commentId: '1234',
        timeStamp: '123456',
        description: 'Comment 2',
      },
      {
        username: 'anirudh',
        commentId: '1234',
        timeStamp: '123456',
        description: 'Comment 3',
      },
    ];
    setCommentList(data);
  };

  return (
    <div className="post__container">
      {/* Header */}
      <div className="post__header">
        <Avatar className="post__image" src="" />
        <div className="post__username">{props.userName}</div>
      </div>

      {/* Image */}
      <div>
        <img src={props.postImage} width="615px" alt="Post" />
      </div>

      {/* Analytics */}
      <div>
        <div style={{ marginLeft: '10px' }}>
          <img src={love} className="post_reactimage" alt="Love" />
          <img src={comment} className="post_reactimage" alt="Comment" />
          <img src={share} className="post_reactimage" alt="Share" />
        </div>
        <div style={{ fontWeight: 'bold', marginLeft: '20px' }}>
          {props.likes} likes
        </div>
      </div>

      {/* Comment Section */}
      <div>
        {commentList.map((item, index) => (
          <div key={index} className="post_comment">
            {item.username}: {item.description}
          </div>
        ))}
        <input
          type="text"
          className="post__commentbox"
          placeholder="Add a comment..."
        />
      </div>
    </div>
  );
};

export default Post;
