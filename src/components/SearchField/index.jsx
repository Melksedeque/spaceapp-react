import styled from "styled-components";

const StyledSearchField = styled.input`
  border: 2px solid transparent;
  border-radius: 0.625rem;
  color: #d9d9d9;
  font-size: 1.25rem;
  height: 40px;
  outline: none;
  padding: 0 16px;
  position: relative;
  width: 100px;
  &::before {
    background: linear-gradient(to right, #c98cf1 0%, #7b78e5 100%);
    content: "";
    display: block;
    height: 60px;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-50%, -50%);
    width: 200px;
  }
  &::after {
    background: url("./search.png") no-repeat center right;
    content: "";
    display: block;
    height: 2rem;
    padding-right: 1rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;
    z-index: 10;
  }
  &::placeholder {
    color: #d9d9d9;
  }
  &:focus {
    border-bottom-color: #7b78e5;
    border-top-color: #7b78e5;
  }
`;

export default function SearchField() {
  return <StyledSearchField type="text" placeholder="O que você procura?" />;
}
