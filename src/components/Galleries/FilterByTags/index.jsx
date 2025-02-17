import styled from "styled-components";
import tags from "./tags.json";

const StyledFilterByTags = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
  padding: 2rem 0;
  h3 {
    color: #d9d9d9;
    font: normal 1.5rem GandhiSansRegular;
    line-height: 1.75rem;
  }
  nav {
    display: flex;
    gap: 10px;
    list-style: none;
    button {
        background: #44566f;
        border: 0 none;
        border-radius: 10px;
        cursor: pointer;
        padding: 2px;
        span {
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

export default function FilterByTags({ selectedTag, onTagSelect }) {
  return (
    <StyledFilterByTags>
      <h3>Busque por tags:</h3>
      <nav>
        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => onTagSelect(tag.id)}
            className={selectedTag === tag.id ? "isActive" : ""}
          >
            <span>{tag.titulo}</span>
          </button>
        ))}
      </nav>
    </StyledFilterByTags>
  );
}
