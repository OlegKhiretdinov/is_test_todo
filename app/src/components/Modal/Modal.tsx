import { FC } from "react";
import { createPortal } from "react-dom";
import cls from "./Modals.module.css";
import closeSvg from "../../assets/close.svg";
import { TModal } from "./Modal.types";

export const Modal: FC<TModal> = (props) => {
  const { title, children, closeHandler } = props;

  return createPortal(
    <div className={cls.overlay}>
      <div className={cls.modal}>
        <header className={cls.header}>
          <h1 className={cls.title}>{title}</h1>
          <div className={cls.closeIcon} onClick={closeHandler}>
            <img src={closeSvg} />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>,
    document.body
  );
};
