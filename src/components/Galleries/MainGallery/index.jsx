import { styled } from "styled-components";
import Gallery from "../Gallery";
import { filterImages } from "../../../utils/galleryUtils";

const MainGalleryContainer = styled.div`
  flex: 1;
`;

export default function MainGallery({
  pictures,
  selectedTag,
  searchTerm,
  onSelectedPicture,
}) {
  const filteredPictures = filterImages(pictures, selectedTag, searchTerm);

  return (
    <MainGalleryContainer>
      <Gallery
        alignment="left"
        title="Navegue pela galeria"
        pictures={filteredPictures}
        onSelectedPicture={onSelectedPicture}
        dataGallery="main"
      />
    </MainGalleryContainer>
  );
}
