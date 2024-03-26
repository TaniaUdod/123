import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 20;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px 16px 40px 40px;
  display: inline-flex;
  flex-direction: column;
  width: 982px;
  max-height: 95vh;
  gap: 24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  right: 40px;

  & svg {
    width: 32px;
    height: 32px;
    fill: none;
    stroke: #101828;
  }
`;
