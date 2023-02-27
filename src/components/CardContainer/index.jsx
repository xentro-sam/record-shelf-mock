import * as React from 'react';
import './CardContainer.css';
import genreIcon from '../../assets/icon-genre.svg';
import {GET_SONGS_DATA} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import Card from '../Card';
import {CARD_COLORS} from '../../constants/cardColors';

export default function CardContainer() {
  let index = 1;
  function cardColor() {
    index = index === 1 ? 0 : 1;
    return CARD_COLORS[index];
  }

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    makeRequest(GET_SONGS_DATA, {
      headers: {
        Authorization: 'Bearer QWlzaHdhcnlhIE4=',
      }})
        .then((response) => {
          setCards(response.data);
        });
  }, []);

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
      <div id='card-container-body'>
        {cards.length ? cards.map((card) => {
          return <Card key={card.id} {...card} color={cardColor()} />;
        },
        ) : (<div>Loading...</div>)}
      </div>
    </div>
  );
}
