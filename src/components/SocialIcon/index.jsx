import styled from "styled-components";

const StyledSocialIcon = styled.a`
  img {
    display: block;
    transition: all 0.25s ease-in-out;
  }
  &:hover {
    img {
      filter: invert(38%) sepia(76%) saturate(294%) hue-rotate(206deg)
        brightness(91%) contrast(88%);
    }
  }
`;

export default function SocialIcon({ icon, name, link }) {
  return (
    <StyledSocialIcon href={link} target="_blank" rel="noreferrer">
      <img src={icon} alt={`Social icon ${name}`} />
    </StyledSocialIcon>
  );
}
