import * as React from 'react';
import './CardContainer.css';
import genreIcon from '../../assets/icon-genre.svg';

export default function CardContainer() {
  return (
    <div id="card-container">
      <div id='card-container-header'>
        <div id='card-container-title'>
        all songs
        </div>
        <div id='genre-icon'>
          <img src={genreIcon} alt="genre-icon" />
        </div>
      </div>
    </div>
  );
}
