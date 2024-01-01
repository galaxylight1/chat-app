import styled from "styled-components";

export const InputField = styled.input`
  outline: none;
  border: none;
  color: black;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  background-color: inherit;
  color: #fff;
  padding: 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  color: #fff;
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: #2b09ff;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 10px;
  padding: 25px;
  font-weight: 500;
  transition: 250ms background-color ease;
  border: 2px solid #2b09ff;
  &:focus {
    background-color: #3415ff;
    border: 2px solid #fff;
  }
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:active {
    background-color: #3a1cff;
  }
`;

export const Page = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
