import tags from "../components/Galleries/FilterByTags/tags.json";

export const getTagById = (tagId) => {
  const tag = tags.find((tag) => tag.id === tagId);
  return tag ? tag.titulo : "Tag não encontrada";
};

export const filterImagesByTag = (images, selectedTagId) => {
  if (selectedTagId === 0) return images;
  return images.filter((image) => image.tagId === selectedTagId);
};

export const filterImagesBySearch = (images, searchTerm) => {
  if (!searchTerm) return images;

  const normalizedSearch = searchTerm.toLowerCase().trim();
  return images.filter((image) =>
    image.titulo.toLowerCase().includes(normalizedSearch)
  );
};

export const filterImages = (images, selectedTagId, searchTerm) => {
  const filteredByTag = filterImagesByTag(images, selectedTagId);
  return filterImagesBySearch(filteredByTag, searchTerm);
};

export const getTagsWithCount = (images) => {
  return tags.map((tag) => ({
    ...tag,
    count:
      tag.id === 0
        ? images.length
        : images.filter((image) => image.tagId === tag.id).length,
  }));
};

export const imageHasTag = (image, tagId) => {
  return tagId === 0 || image.tagId === tagId;
};
