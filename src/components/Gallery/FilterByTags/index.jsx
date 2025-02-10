import styled from "styled-components";

const StyledFilterByTags = styled.div`
  align-items: center;
  display: flex;
  h3 {
    color: #d9d9d9;
    font: normal 1.5rem GandhiSansRegular;
    line-height: 1.75rem;
  }
  nav {
    ul {
      display: flex;
      gap: 10px;
      list-style: none;
      li {
        background: #44566f;
        border-radius: 10px;
        padding: 2px;
        a {
          background: #44566f;
          border-radius: 10px;
          display: block;
          font: normal 1rem GandhiSansRegular;
          color: #d9d9d9;
          padding: 10px 8px;
          text-decoration: none;
        }
        &:hover {
          background: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
        }
        &.isActive {
          background: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
        }
      }
    }
  }
`;

export default function FilterByTags() {
  return (
    <StyledFilterByTags>
      <h3>Busque por tags:</h3>
      <nav>
        <ul>
          <li>
            <a href="#">Estrelas</a>
          </li>
          <li>
            <a href="#">Galáxia</a>
          </li>
          <li>
            <a href="#">Lua</a>
          </li>
          <li>
            <a href="#">Planetas</a>
          </li>
          <li>
            <a href="#">Todas</a>
          </li>
        </ul>
      </nav>
    </StyledFilterByTags>
  );
}
