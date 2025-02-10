import Title from "../Title";
import FilterByTags from "./FilterByTags";

export default function Gallery() {
  return (
    <>
      <FilterByTags />
      <section className="asdf">
        <Title>Navegue pela galeria</Title>
        <figure>
          <img src="./imagens/001.jpg" alt="Imagem 001" />
          <figcaption>001</figcaption>
        </figure>
        <figure>
          <img src="./imagens/002.jpg" alt="Imagem 002" />
          <figcaption>002</figcaption>
        </figure>
        <figure>
          <img src="./imagens/003.jpg" alt="Imagem 003" />
          <figcaption>003</figcaption>
        </figure>
        <figure>
          <img src="./imagens/004.jpg" alt="Imagem 004" />
          <figcaption>004</figcaption>
        </figure>
        <figure>
          <img src="./imagens/005.jpg" alt="Imagem 005" />
          <figcaption>005</figcaption>
        </figure>
        <figure>
          <img src="./imagens/006.jpg" alt="Imagem 006" />
          <figcaption>006</figcaption>
        </figure>
      </section>
    </>
  );
}
