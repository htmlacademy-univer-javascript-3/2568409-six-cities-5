import React from 'react';
import { IOfferListProps, PlaceClassTypes } from '../types.ts';
import { PlaceCard } from './PlaceCard.tsx';

export const OfferList: React.FC<IOfferListProps> = ({offers, onListItemHover, listType }): JSX.Element => (
  <div className={
    `${listType === PlaceClassTypes.Cities ? 'cities__places-list' : 'near-places__list'} places__list
    ${listType === PlaceClassTypes.Cities ? 'tabs__content' : null}`
  }
  >
    {offers.map((place) => (
      <PlaceCard
        key={place.id}
        place={place}
        placeCardType={listType}
        onMouseOver={() => onListItemHover(place.id)}
        onMouseLeave={() => onListItemHover(null)}
      />))}
  </div>
);
