import styled from "styled-components";
import search from "./search.png";

const StyledSearchBox = styled.div`
  background: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
  border-radius: 0.675rem;
  position: relative;
  display: inline-block;
  padding: 2px;
`;

const StyledSearchField = styled.input`
  background: linear-gradient(#041833 20%, #04244f 100%);
  border: 0 none;
  border-radius: 0.675rem;
  box-sizing: border-box;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  height: 56px;
  line-height: 20px;
  outline: none;
  padding: 12px 16px;
  width: 566px;
  &::placeholder {
    color: #d9d9d9;
  }
`;

const StyledSearchIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

export default function SearchField() {
  return (
    <StyledSearchBox>
      <StyledSearchField placeholder="O que você procura?" />
      <StyledSearchIcon src={search} alt="Ícone de lupa para busca" />
    </StyledSearchBox>
  );
}
