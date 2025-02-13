export default function ZoomModal({foto}) {
  return (
    <>
      <dialog open={!!foto}>
        <img src="" alt="" />
        <form method="dialog">
          <p>
            Lucky number is: <strong>25</strong>
          </p>
          <button>Close dialog</button>
        </form>
      </dialog>
    </>
  );
}
