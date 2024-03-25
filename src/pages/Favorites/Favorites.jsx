import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import CampersList from 'components/CampersList/CampersList';
import { AdvertsItem, AdvertsList, Message } from './Favorites.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <AdvertsList>
          {favorites.map(advert => (
            <AdvertsItem key={advert._id}>
              <CampersList advert={advert} />
            </AdvertsItem>
          ))}
        </AdvertsList>
      ) : (
        <Message>
          It appears that you haven't added any campers to your favorites yet.
          To get started, you can{' '}
          <Link to="/catalog" style={{ color: '#e44848', fontWeight: 'bold' }}>
            add campers{' '}
          </Link>{' '}
          that you like to your favorites for easier access in the future.
        </Message>
      )}
    </>
  );
};

export default Favorites;
