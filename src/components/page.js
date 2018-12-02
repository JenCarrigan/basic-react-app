import React from 'react';
import Deck from './deck.js';

const Page = props => {
  return props.content.map( (section, i) => <Deck content={section} />);
};

export default Page;