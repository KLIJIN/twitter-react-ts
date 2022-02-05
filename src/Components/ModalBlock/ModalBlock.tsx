import React from "react";
import ReactDOM from "react-dom";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "../../pages/SignIn/SignIn";

interface ModalBlockProps {
  title?: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStyles>;
  visible?: boolean;
  onClose: () => void;
}

const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  onClose,
  visible = false,
  children,
}: ModalBlockProps): React.ReactElement | null => {
  const wrapperClickHandler = (): void => {
    onClose();
  };

  if (!visible) {
    return null;
  }

  const wrapperStyle = {
    background: "rgb(0 0 0 / 30%)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9,
  } as React.CSSProperties;

  const modalStyle = {
    zIndex: 10,
  };

  const parent = {
    width: "100%",
    height: " 100%",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    overflow: "auto",
  } as React.CSSProperties;

  const modalRoot = document.getElementById("root_modals") as HTMLElement;
  // assuming in your html file has a div with id 'modal-root';

  return (
    <div>
      {visible &&
        ReactDOM.createPortal(
          <div style={parent}>
            <div
              // === бандл для линтера ===
              role="button"
              aria-label="wrapper"
              tabIndex={0}
              onKeyUp={() => console.log("wrapper")}
              // ================================
              className="wrapper"
              style={wrapperStyle}
              onClick={wrapperClickHandler}
            />
            <div style={modalStyle}>{children}</div>
          </div>,
          modalRoot
        )}
    </div>
  );
};

export default ModalBlock;
