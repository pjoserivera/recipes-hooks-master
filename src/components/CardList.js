import React from 'react';
import Card from './Card';

const CardList = ({ recipes }) => {
  return (
    <div>
      {
        recipes.map((recipe, i) => {
          return (
            <Card
              title={recipes[i].title}
              cuisine={recipes[i].cuisine}
              thumbnailUrl={recipes[i].image}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;