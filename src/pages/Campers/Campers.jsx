import { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import CampersList from 'components/CampersList/CampersList';
import { Container } from './Campers.styled';

const Campers = () => {
  const [filters, setFilters] = useState({});

  const handleSearch = selectedFilters => {
    setFilters(selectedFilters);
    console.log('Selected Filters:', selectedFilters);
  };

  return (
    <Container>
      <SearchForm handleSearch={handleSearch} filters={filters} />
      <CampersList filters={filters} />
    </Container>
  );
};

export default Campers;
