import { FC, useCallback, useState } from "react";
import { Modal } from "../../Modal/Modal";
import { deleteSeminarRequest } from "../../../api/request";
import cls from "./DeleteSeminarModal.module.css";
import { TDeleteSeminarModal } from "./DeleteSeminarModal.types";

export const DeleteSeminarModal: FC<TDeleteSeminarModal> = (props) => {
  const { closeHandler, id, title, reloadData } = props;
  const [hasError, setHasError] = useState(false)

  const deleteHandler = useCallback(() => {
    deleteSeminarRequest(id)
    .then(data => {
      if(data?.status === 200) {
        reloadData()
      } else {
        setHasError(true)
      }}).catch(() => {
        setHasError(true)
      })
  }, [])

  return (
    <Modal closeHandler={closeHandler} title="Удаление">
      <div className={cls.content}>
        <p>{`Удаление семинара: ${title}`}</p>
        {hasError ? <p className={cls.error}>Не удалось удалить</p> : null}
        <footer className={cls.footer}>
          {hasError ? null : <button onClick={deleteHandler} className={cls.delete}>Удалить</button>}
          <button onClick={closeHandler}>{hasError ? "Закрыть" : "Отмена"}</button>
        </footer>
      </div>
    </Modal>
  );
};
