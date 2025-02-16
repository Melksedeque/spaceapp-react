export default function ZoomModal({ picture }) {
  return (
    <>
      <dialog open={!!picture}>
        <p>
          Olá, eu sou um <strong>modal</strong>!
        </p>
        <form method="dialog">
          <button>Ok!</button>
        </form>
      </dialog>
    </>
  );
}
