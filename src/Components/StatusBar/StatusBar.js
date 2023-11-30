import React, { useEffect, useState } from 'react';
import './StatusBar.css';
import { Avatar } from '@mui/material';

const StatusBar = () => {
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let data = [
      {
        username: 'anindya_bunny',
        imageURL: '../../images/dp6.png.png',
      },
      {
        username: 'abcs',
        imageURL:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU',
      },
      {
        username: 'qwe',
        imageURL: 'https://www.w3schools.com/w3css/img_avatar3.png',
      },
      {
        username: 'jyjj',
        imageURL: 'https://darresne.com/img/female-avatar.png',
      },
      {
        username: 'jyjj',
        imageURL: 'https://www.w3schools.com/w3css/img_avatar3.png',
      },
      {
        username: 'jyjj',
        imageURL:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGonDgYzVXUcaKSWbvyH_ICVD23aI4zlRMJQ&usqp=CAU',
      },
    ];
    setStatusList(data);
  };

  return (
    <div>
      <div className="statusbar__container">
        {statusList.map((item, index) => (
          <div className="status" key={index}>
            <Avatar className="statusbar__status" src={item.imageURL} />
            <div className="statusbar__text">{item.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;
