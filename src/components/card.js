import React from 'react';
//import '../styles/card.scss';

const Card = props => {
  return (
    <div className="card">
      <h3>{props.content.title}</h3>
      <p>{props.content.copy}</p>
      <img
        src={props.content.media.href}
        alt={props.content.media.alt}
        title={props.content.media.title}
      />
      <figcaption>{props.content.media.title}</figcaption>
      <div className="links">
        {props.content.links.map((link, i) => (
          <a clasName={link.type} href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;