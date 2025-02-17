import styled from "styled-components";
import GalleryImage from "../Galleries/Image";
import IconButton from "../Galleries/IconButton";

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
    background: transparent;
    border: 0;
    display: flex;
    flex-direction: column;
    margin: 0;
    overflow: auto;
    padding: 0;
    position: relative;
    width: 1000px;
    form {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  }
`;

export default function ZoomModal({ picture, onClose }) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {picture && (
        <Overlay>
          <dialog open={!!picture}>
            <GalleryImage image={picture} expanded={true} />
            <form method="dialog">
              <IconButton
                name="close"
                icon="/icones/fechar.png"
                onClick={handleClose}
              />
            </form>
          </dialog>
        </Overlay>
      )}
    </>
  );
}
