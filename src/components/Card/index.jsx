import * as React from 'react';
import './Card.css';

export default function Card(songInfo) {
  {/* const [like, setLike] = React.useState(false);*/}
  {console.log(songInfo);}
  return (
    <div id='card' className={songInfo.color}>
      <div id='card-pic'>
        <img src={songInfo.imageUrl} alt="song-pic" />
      </div>
      <div id='card-info'>
        <div id='card-title'>
          {songInfo.name}
        </div>
        <div id='card-artist'>
          {songInfo.artist.name}
        </div>
      </div>
    </div>
  );
}
