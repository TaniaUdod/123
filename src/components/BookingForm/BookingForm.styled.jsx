import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';

export const Form = styled.form`
  width: 448px;
  height: 532px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px;
`;

export const Title = styled.p`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: #475467;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  background-color: #f7f7f7;
  border-radius: 10px;
  border: none;
  color: #101828;
  font-weight: 400;
  line-height: 20px;
  font-size: 16px;
  margin-top: 14px;
  padding: 18px;
  width: 400px;
  position: relative;

  &.react-datepicker-wrapper {
    width: 100%;
  }
`;

export const DatePickerWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 28px;
    top: 50%;
    pointer-events: none;
  }
`;

export const Input = styled.input`
  background-color: #f7f7f7;
  border-radius: 10px;
  border: none;
  color: #101828;
  font-weight: 400;
  line-height: 20px;
  font-size: 16px;
  margin-top: 14px;
  padding: 18px;
  width: 100%;
  max-width: 400px;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: #e44848;
`;

export const Textarea = styled.textarea`
  background-color: #f7f7f7;
  border-radius: 10px;
  border: none;
  color: #101828;
  font-weight: 400;
  line-height: 20px;
  font-size: 16px;
  margin-top: 14px;
  padding: 18px;
  width: 100%;
  max-width: 400px;
  resize: none;
  outline: none;
`;

export const Button = styled.button`
  padding: 16px 60px;
  background-color: #e44848;
  border-radius: 200px;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  margin-top: 24px;
  border: none;
  cursor: pointer;
  transition: background-color 150ms linear;

  &:hover {
    background-color: #d84343;
  }
`;
