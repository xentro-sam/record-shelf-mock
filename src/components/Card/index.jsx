import * as React from 'react';
import './Card.css';
import {GET_SONG_LIKES as getSongLikes, UPDATE_SONG_LIKES as updateSongLikes} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

import heartRed from '../../assets/heart-red.svg';
import heartGrey from '../../assets/heart-gray.svg';

export default function Card(songInfo) {
  const [like, setLike] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    makeRequest(getSongLikes(songInfo.id), {
      headers: {
        Authorization: 'Bearer QWlzaHdhcnlhIE4=',
      }})
        .then((response) => {
          setLike(response.data.like);
          setCount(response.data.count);
        });
  }, []);

  const handleLike = async () => {
    makeRequest(updateSongLikes(songInfo.id), {
      headers: {
        Authorization: 'Bearer QWlzaHdhcnlhIE4=',
      },
      data: {
        like: !like,
      },
    })
        .then((response) => {
          setLike(response.data.like);
          setCount(response.data.count);
        });
  };


  {console.log(songInfo);}
  return (
    <div id='card' className={songInfo.color}>
      <div id='card-pic'>
        <img src={songInfo.imageUrl} alt="song-pic" />
      </div>
      <div id='card-info'>
        <div>
          <div id='card-title'>
            {songInfo.name}
          </div>
          <div id='card-artist'>
            {songInfo.artist.name}
          </div>
        </div>
        <div id='card-like' onClick={handleLike}>
          <img src={like ? heartRed : heartGrey}
            alt="like" />
          <div id='card-like-count' >
            {count}
          </div>
        </div>
      </div>
    </div>
  );
}
