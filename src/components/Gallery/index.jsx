import styled from "styled-components";
import FilterByTags from "./FilterByTags";
import MainGallery from "./MainGallery";
import PopularGallery from "./PopularGallery";

const StyledGalleryContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  gap: 24px;
`;

export default function Gallery() {
  return (
    <>
      <FilterByTags />
      <StyledGalleryContainer>
        <MainGallery />
        <PopularGallery />
      </StyledGalleryContainer>
    </>
  );
}
