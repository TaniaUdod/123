import styled from 'styled-components';

export const AdvertsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdvertsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px;
  width: 880px;
  margin: 15px 0;
`;

export const Message = styled.p`
  text-align: center;
  font-size: 24px;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 100px;
`;
