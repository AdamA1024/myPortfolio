import React from "react";
import "./Modal.css";

export const Modal = ({ title, content, onClose }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") {
          onClose();
        }
      }}
    >
      <div className="modal">
        <div className="modal-content">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
