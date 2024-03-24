import { useState } from 'react';
import sprite from '../../images/sprite.svg';

import Modal from 'components/Modal/Modal';
import {
  AdvertsItem,
  AdvertsList,
  AdvertsWrap,
  Button,
  CategoriesItem,
  CategoriesList,
  Description,
  Img,
  Price,
  PriceWrap,
  RatingWrap,
  Title,
  TitleWrap,
} from './CampersList.styled';

const CampersList = ({ adverts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AdvertsList>
      {adverts.map(
        ({
          _id,
          gallery,
          name,
          price,
          rating,
          reviews,
          location,
          description,
          adults,
          transmission,
          engine,
          details: { kitchen, beds, airConditioner },
        }) => (
          <AdvertsItem key={_id}>
            <Img src={gallery[0]} alt={name} />
            <AdvertsWrap>
              <TitleWrap>
                <Title>{name}</Title>
                <PriceWrap>
                  <Price>€{price.toFixed(2)}</Price>
                  <svg width="24" height="24" fill="none" stroke="currentColor">
                    <use href={`${sprite}#icon-heart`} />
                  </svg>
                </PriceWrap>
              </TitleWrap>

              <RatingWrap>
                <p>
                  <svg width="16" height="16" fill="none" stroke="currentColor">
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                  {rating} ({reviews.length} Reviews)
                </p>

                <p>
                  <svg width="16" height="16" fill="none" stroke="currentColor">
                    <use href={`${sprite}#icon-map-pin`} />
                  </svg>
                  {location.split(',').reverse().join(', ')}
                </p>
              </RatingWrap>

              <Description>{description}</Description>

              <CategoriesList>
                <CategoriesItem>
                  <svg width="20" height="20">
                    <use href={`${sprite}#icon-adults`} />
                  </svg>
                  {adults} adults
                </CategoriesItem>
                <CategoriesItem style={{ textTransform: 'capitalize' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor">
                    <use href={`${sprite}#icon-automatic`} />
                  </svg>
                  {transmission}
                </CategoriesItem>
                <CategoriesItem style={{ textTransform: 'capitalize' }}>
                  <svg width="20" height="20">
                    <use href={`${sprite}#icon-petrol`} />
                  </svg>
                  {engine}
                </CategoriesItem>
                {kitchen >= 1 && (
                  <CategoriesItem>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <use href={`${sprite}#icon-kitchen`} />
                    </svg>
                    Kitchen
                  </CategoriesItem>
                )}
                <CategoriesItem>
                  <svg width="20" height="20" fill="none" stroke="currentColor">
                    <use href={`${sprite}#icon-beds`} />
                  </svg>
                  {beds} beds
                </CategoriesItem>
                {airConditioner >= 1 && (
                  <CategoriesItem>
                    <svg width="20" height="20" fill="none">
                      <use href={`${sprite}#icon-AC`} />
                    </svg>
                    AC
                  </CategoriesItem>
                )}
              </CategoriesList>

              <Button onClick={openModal}>Show more</Button>
            </AdvertsWrap>
          </AdvertsItem>
        )
      )}

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p>details</p>
        </Modal>
      )}
    </AdvertsList>
  );
};

export default CampersList;
