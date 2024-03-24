import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import {
  AdvertsWrap,
  Description,
  Price,
  RatingWrap,
  Title,
  ImgList,
  Tabs,
  TabButton,
  TabContent,
} from './CamperDetails.styled';

const CamperDetails = ({ advert }) => {
  const [activeTab, setActiveTab] = useState('Features');

  return (
    <AdvertsWrap>
      <Title>{advert.name}</Title>

      <RatingWrap>
        <p style={{ textDecorationLine: 'underline' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor">
            <use href={`${sprite}#icon-star`} />
          </svg>
          {advert.rating} ({advert.reviews.length} Reviews)
        </p>

        <p>
          <svg width="16" height="16" fill="none" stroke="currentColor">
            <use href={`${sprite}#icon-map-pin`} />
          </svg>
          {advert.location.split(',').reverse().join(', ')}
        </p>
      </RatingWrap>

      <Price>€{advert.price.toFixed(2)}</Price>

      <ImgList>
        {advert.gallery.length > 0 &&
          advert.gallery.map(link => (
            <li key={`${advert._id}`}>
              <img src={link} alt={advert.name} />
            </li>
          ))}
      </ImgList>

      <Description>{advert.description}</Description>

      <Tabs>
        <TabButton
          onClick={() => setActiveTab('Features')}
          isActive={activeTab === 'Features'}
        >
          Features
        </TabButton>
        <TabButton
          onClick={() => setActiveTab('Reviews')}
          isActive={activeTab === 'Reviews'}
        >
          Reviews
        </TabButton>
      </Tabs>

      <TabContent>
        {activeTab === 'Features' && (
          <div>
            {/* Features content here */}
            <h3>Features</h3>
            <ul>
              <li>Adults: {advert.adults}</li>
              <li>Transmission: {advert.transmission}</li>
              <li>Engine: {advert.engine}</li>
              {advert.kitchen >= 1 && <li>Kitchen</li>}
              <li>Beds: {advert.beds}</li>
              {advert.airConditioner >= 1 && <li>AC</li>}
            </ul>
          </div>
        )}

        {activeTab === 'Reviews' && (
          <div>
            {/* Reviews content here */}
            <h3>Reviews</h3>
            <ul>
              {advert.reviews.map(review => (
                <li key={`${advert._id}`}>
                  <p>{review.text}</p>
                  <p>
                    <strong>{review.author}</strong> - {review.rating} stars
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </TabContent>
    </AdvertsWrap>
  );
};

export default CamperDetails;
