import React, { useEffect, useState } from 'react';
import { IOfferListProps } from '..//types.ts';
import { PlaceCard } from './PlaceCard.tsx';

export const OfferList: React.FC<IOfferListProps> = ({ offers }): JSX.Element => {

  const [activeCard, setActiveCard] = useState<null | number>(null);

  useEffect(() => {
  }, [activeCard]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((place) => (
        <PlaceCard
          key={place.id}
          place={place}
          isFullSize
          onMouseOver={() => setActiveCard(place.id)}
          onMouseLeave={() => setActiveCard(null)}
        />))}
    </div>
  );
};