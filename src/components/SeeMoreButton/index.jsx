import styled from "styled-components";

const StyledSeeMore = styled.div`
  background: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
  border-radius: 10px;
  display: block;
  padding: 2px;
  width: 100%;
  button {
    background: #092d5c;
    border: 0 none;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    display: block;
    font: 700 1.25rem GandhiSansBold;
    padding: 1rem 2rem;
    transition: all 0.25s ease-in-out;
    width: 100%;
    &:hover {
      background-color: transparent;
    }
  }
`;

export default function SeeMoreButton({ onClick }) {
  return (
    <StyledSeeMore>
      <button onClick={onClick}>Ver mais</button>
    </StyledSeeMore>
  );
}
