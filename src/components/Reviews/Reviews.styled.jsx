import styled from 'styled-components';

export const Container = styled.div`
  width: 430px;
`;

export const ReviewItem = styled.li`
  margin-bottom: 24px;
`;

export const ReviewTitle = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background: #f2f4f7;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    color: #e44848;
    text-align: center;
    align-content: center;
  }

  p {
    color: #101828;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const StarsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ReviewComment = styled.p`
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
