import React from 'react';
import { IReviewRatingProps } from '../types';
import {COMMENT_STARS} from '../constant.ts';

export const ReviewRate: React.FC<IReviewRatingProps> = ({value, onChange}) => (
  <div className="reviews__rating-form form__rating">
    {COMMENT_STARS.map(({rating, title}) => (
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
