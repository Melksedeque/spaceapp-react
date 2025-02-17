import GalleryImage from "../Gallery/GalleryImage";

export default function ZoomModal({ picture }) {
  return (
    <>
      {picture && (
        <dialog open={!!picture}>
          <GalleryImage image={picture} expanded={true} />
          <form method="dialog">
            <button>Ok!</button>
          </form>
        </dialog>
      )}
    </>
  );
}
