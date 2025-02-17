export default function ZoomModal({ picture }) {
  console.log(picture);
  return (
    <>
      <dialog open={!!picture}>
        <p>
          Olá, eu sou um <strong>modal</strong>!
        </p>
        <figure>
          <img src={picture.path} alt={picture.titulo} />
          <figcaption>{picture.titulo}</figcaption>
        </figure>
        <form method="dialog">
          <button>Ok!</button>
        </form>
      </dialog>
    </>
  );
}
