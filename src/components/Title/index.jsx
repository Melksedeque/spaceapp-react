import styled from "styled-components";

const StyledTitle = styled.h2`
  color: #7b78e5;
  font: normal 2rem GandhiSansRegular;
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
