import styled from "styled-components";
import GalleryImage from "../Gallery/GalleryImage";

const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  dialog {
  }
`;

export default function ZoomModal({ picture }) {
  return (
    <>
      {picture && (
        <Overlay>
          <dialog open={!!picture}>
            <GalleryImage image={picture} expanded={true} />
            <form method="dialog">
              <button>Ok!</button>
            </form>
          </dialog>
        </Overlay>
      )}
    </>
  );
}
