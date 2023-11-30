import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Post from '../Post/Post';

const MainPage = () => {
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    let data = [
      {
        postId: '123456',
        userName: 'anubhav',
        postImageURL: 'https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg',
        timeStamp: '12345',
        likes: '1234',
      },
      {
        postId: '123456',
        userName: 'anuragini',
        postImageURL: 'https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg',
        timeStamp: '12345',
        likes: '1234',
      },
      {
        postId: '123456',
        userName: 'anirudh',
        postImageURL: 'https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg',
        timeStamp: '12345',
        likes: '1234',
      },
    ];
    setPostArray(data);
  };

  return (
    <div>
      {postArray.map((item, index) => (
        <Post key={index} id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
      ))}
    </div>
  );
};

export default MainPage;
