import React from 'react';

const Card = ({ title, cuisine, thumbnailUrl }) => {
  return (
    <div className='tc grow bg-light-gray br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='recepie' src={thumbnailUrl} width={100} height={100}/>
      <div>
        <h2>{title}</h2>
        <p>{cuisine}</p>
      </div>
    </div>
  );
}

export default Card;
