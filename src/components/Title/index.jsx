import styled from "styled-components";

const StyledTitle = styled.h2`
  color: #7b78e5;
  font: normal 2rem GandhiSansRegular;
  margin: 0;
  text-align: ${(props) => props.$align || "left"};
`;

export default function Title({ children, align }) {
  return <StyledTitle $align={align}>{children}</StyledTitle>;
}
