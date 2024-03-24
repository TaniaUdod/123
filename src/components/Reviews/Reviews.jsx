import React from 'react';
import sprite from '../../images/sprite.svg';
import {
  Container,
  ReviewComment,
  ReviewItem,
  ReviewTitle,
  StarsList,
} from './Reviews.styled';

const Reviews = ({ advert }) => {
  return (
    <Container>
      <ul>
        {advert.reviews.map(review => (
          <ReviewItem key={review.reviewer_name}>
            <ReviewTitle>
              <span>{review.reviewer_name[0].toUpperCase()}</span>
              <div>
                <p>{review.reviewer_name}</p>
                <StarsList>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <li key={i}>
                        <svg
                          width="16"
                          height="16"
                          fill={
                            Math.round(review.reviewer_rating) < i + 1
                              ? '#F2F4F7'
                              : '#FFC531'
                          }
                          stroke={
                            Math.round(review.reviewer_rating) < i + 1
                              ? '#F2F4F7'
                              : '#FFC531'
                          }
                        >
                          <use href={`${sprite}#icon-star`} />
                        </svg>
                      </li>
                    ))}
                </StarsList>
              </div>
            </ReviewTitle>
            <ReviewComment>{review.comment}</ReviewComment>
          </ReviewItem>
        ))}
      </ul>
    </Container>
  );
};

export default Reviews;
