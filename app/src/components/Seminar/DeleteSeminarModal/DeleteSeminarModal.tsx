import { FC } from "react";
import { Modal } from "../../Modal/Modal";
import cls from "./DeleteSeminarModal.module.css";
import { TDeleteSeminarModal } from "./DeleteSeminarModal.types";

export const DeleteSeminarModal: FC<TDeleteSeminarModal> = (props) => {
  const { closeHandler, id, title } = props;

  return (
    <Modal closeHandler={closeHandler} title="Удаление">
      <div className={cls.content}>
        {`Удаление семинара: ${title}`}
        <footer className={cls.footer}>
          <button className={cls.delete}>Удалить</button>
          <button onClick={closeHandler}>Отмена</button>
        </footer>
      </div>
    </Modal>
  );
};
