import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

// Modal Component
const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div style={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "500px",
    width: "100%",
    position: "relative",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer",
  },
  content: {
    marginTop: "20px",
  },
};

export default Modal;
