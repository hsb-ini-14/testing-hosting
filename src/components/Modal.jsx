import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = ({ children, buttonCaption, ref }) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="mt-[15%] ml-[35%] backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
