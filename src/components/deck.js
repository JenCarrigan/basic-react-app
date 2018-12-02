import React from 'react';
import Card from './card.js';
//import '../styles/_deck.scss';

const Deck = props => (
  <section className="deck">
    <h2>{props.content.deckTitle}</h2>
    <div className="blocks">
      {props.content.records &&
        props.content.records.map((card, i) => <Card key={i} content={card} />)}
    </div>
  </section>
);

export default Deck;