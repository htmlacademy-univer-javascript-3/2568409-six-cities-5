import React from 'react';
import {IReviewsListProps} from '../../types.ts';
import {ReviewForm} from './ReviewForm.tsx';
import {ReviewItem} from './ReviewItem.tsx';

export const ReviewsList: React.FC<IReviewsListProps> = ({reviews}): JSX.Element => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews &middot;<span className="reviews__amount">{reviews.length}</span>
    </h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review}/>
      ))}
    </ul>
    <ReviewForm/>
  </section>
);
