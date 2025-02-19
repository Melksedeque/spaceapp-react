import styled from "styled-components";
import SocialIcon from "../SocialIcon";

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: var(--dark-blue);
  color: #fff;
  font: 500 1rem GandhiSansRegular;
  margin-top: 5rem;
  padding: 1rem 2rem;
  text-align: center;
  p {
    margin: 0;
  }
  nav {
    ul {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      gap: 2.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        a {
          display: block;
          img {
            display: block;
          }
        }
      }
    }
  }
  .responsibles {
    display: flex;
    flex-direction: column;
    text-align: right;
    p {
      a {
        color: #fff;
        text-decoration: underline;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <nav>
        <ul>
          <li>
            <SocialIcon
              icon="/imagens/sociais/facebook.svg"
              name="Facebook"
              link="https://www.facebook.com/"
            />
          </li>
          <li>
            <SocialIcon
              icon="/imagens/sociais/instagram.svg"
              name="Instagram"
              link="https://www.instagram.com/"
            />
          </li>
          <li>
            <SocialIcon
              icon="/imagens/sociais/twitter.svg"
              name="Twitter"
              link="https://www.twitter.com/"
            />
          </li>
        </ul>
      </nav>
      <p className="copyright">© 2025 - All rights reserved</p>
      <div className="responsibles">
        <p>
          Designed by{" "}
          <a
            href="http://alura.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alura
          </a>
          .
        </p>
        <p>
          Developed by{" "}
          <a
            href="http://github.com/Melksedeque"
            target="_blank"
            rel="noopener noreferrer"
          >
            Melksedeque
          </a>
          .
        </p>
      </div>
    </StyledFooter>
  );
}
