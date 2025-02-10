import { FC } from "react";
import { Modal } from "../../Modal/Modal";
import cls from "./SeminarModal.module.css";
import { TSeminarModal } from "./SeminarModal.types";

export const SeminarModal: FC<TSeminarModal> = (props) => {
  const { title, date, description, photo, time, closeHandler, editable } =
    props;

  return (
    <Modal closeHandler={closeHandler} title="Семинар">
      <div className={cls.modal}>
        <input disabled={!editable} value={title} />
        <input disabled={!editable} value={description} />
        {editable ? (
          <footer className={cls.footer}>
            <button>Сохранить</button>
            <button onClick={closeHandler}>Отмена</button>
          </footer>
        ) : null}
      </div>
    </Modal>
  );
};
