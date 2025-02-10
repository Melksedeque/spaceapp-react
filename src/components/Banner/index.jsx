import styled from "styled-components";
import banner from "./banner.png";

const StyledBanner = styled.section`
  figure {
    border-radius: 2rem;
    display: block;
    height: 330px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
    figcaption {
      color: #d9d9d9;
      font: normal 2.5rem GandhiSansRegular;
      position: absolute;
      left: 4rem;
      margin: 0;
      padding: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 300px;
    }
  }
`;

export default function MainBanner({ children }) {
  return (
    <StyledBanner>
      <figure>
        <img src={banner} alt="A imagem de um astro" />
        <figcaption>{children}</figcaption>
      </figure>
    </StyledBanner>
  );
}
