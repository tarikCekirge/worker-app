import React from "react";
import Button from "./Button";
import Card from "./Card";
import { createPortal } from "react-dom";

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, message } = error;
  return (
    <>
      {createPortal(
        <div onClick={onConfirm} className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/80 backdrop-blur-md p-6 z-50">
          <Card className="text-white p-0 overflow-hidden shadow-xl">
            <header className="bg-red-500 p-4">
              <h2 className="font-bold">{title}</h2>
            </header>
            <section className="p-4">
              <p>{message}</p>
            </section>
            <footer className="p-4">
              <Button onClick={onConfirm} className="w-fit flex ml-auto mr-0">
                Tamam
              </Button>
            </footer>
          </Card>
        </div>,
        document.body
      )}
    </>
  );
};

export default ErrorModal;
