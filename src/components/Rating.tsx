import React from 'react';
import {IRatingProps} from '../types.ts';

export const Rating: React.FC<IRatingProps> = ({rating, objectType, isFullMode = false}) => (
  <div className={`${objectType}__rating rating`}>
    <div className={`${objectType}__stars rating__stars`}>
      <span style={{width: `${Math.floor(rating + 0.5) * 20}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
    {isFullMode && (
      <span className="offer__rating-value rating__value">{rating}</span>
    )}
  </div>
);
