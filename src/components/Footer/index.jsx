import styled from "styled-components";

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: var(--dark-blue);
  color: #fff;
  font: 400 1rem GandhiSansRegular;
  margin-top: 5rem;
  padding: 1rem 2rem;
  text-align: center;
  p {
    margin: 0;
  }
  .copyright {
  }
  .responsibles {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <nav>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </nav>
      <p className="copyright">© 2025 - All rights reserved</p>
      <div className="responsibles">
        <p>Designed by Alura.</p>
        <p>Developed by Melksedeque.</p>
      </div>
    </StyledFooter>
  );
}
