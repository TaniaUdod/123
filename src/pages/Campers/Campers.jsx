import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll } from 'react-scroll';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { getAdverts } from '../../redux/operations';
import SearchForm from 'components/SearchForm/SearchForm';
import CampersList from 'components/CampersList/CampersList';
import Loader from 'components/Loader/Loader';
import {
  AdvertsItem,
  AdvertsList,
  Button,
  Catalog,
  Container,
} from './Campers.styled';

const Campers = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(true);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectAdverts);

  const handleSearch = selectedFilters => {
    setFilters(selectedFilters);
    // setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getAdverts({ page: currentPage, limit: 4 }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (adverts.length < 4 || adverts.length % 4 !== 0) {
      setIsLoadMore(false);
    } else {
      setIsLoadMore(true);
    }
  }, [adverts]);

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);

    const options = {
      duration: 1500,
      smooth: true,
    };

    animateScroll.scrollTo(0, options);
  };

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}

      <SearchForm handleSearch={handleSearch} filters={filters} />

      <Catalog>
        <AdvertsList>
          {adverts.map(advert => (
            <AdvertsItem key={advert._id}>
              <CampersList advert={advert} />
            </AdvertsItem>
          ))}
        </AdvertsList>

        {isLoadMore && !isLoading && (
          <Button onClick={loadMore}>Load more</Button>
        )}
      </Catalog>
    </Container>
  );
};

export default Campers;
