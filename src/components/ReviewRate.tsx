import React from 'react';
import { IReviewRatingProps } from '../types';

const commentStars = [
  { rating: 5, title: 'perfect' },
  { rating: 4, title: 'good' },
  { rating: 3, title: 'not bad' },
  { rating: 2, title: 'badly' },
  { rating: 1, title: 'terribly' },
];

export const ReviewRate: React.FC<IReviewRatingProps> = ({value, onChange}) => (
  <div className="reviews__rating-form form__rating">
    {commentStars.map(({rating, title}) => (
      <React.Fragment key={title}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id={`${rating}-stars`}
          type="radio"
          checked={value === rating}
          onChange={() => onChange('rating', rating)}
        />
        <label
          htmlFor={`${rating}-stars`}
          className="reviews__rating-label form__rating-label"
          title={title}
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </React.Fragment>
    ))}
  </div>
);