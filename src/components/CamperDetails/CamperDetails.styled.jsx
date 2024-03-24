import styled from 'styled-components';

export const AdvertsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const RatingWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const ImgList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  overflow-x: auto;
  margin-bottom: 24px;

  li {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: calc(100% / 3);
    min-height: 300px;
  }

  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    align-self: stretch;
  }
`;

export const Description = styled.p`
  color: #475467;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 44px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const TabButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ isActive }) => (isActive ? '#ccc' : '#fff')};
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const TabContent = styled.div`
  margin-top: 20px;
`;
