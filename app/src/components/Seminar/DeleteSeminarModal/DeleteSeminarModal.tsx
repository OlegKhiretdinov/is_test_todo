import { FC, useCallback, useState } from "react";
import { Modal } from "../../Modal/Modal";
import { deleteSeminarRequest } from "../../../api/request";
import cls from "./DeleteSeminarModal.module.css";
import { TDeleteSeminarModal } from "./DeleteSeminarModal.types";

export const DeleteSeminarModal: FC<TDeleteSeminarModal> = (props) => {
  const { closeHandler, id, title, reloadData } = props;
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const deleteHandler = useCallback(() => {
    setIsLoading(true)
    deleteSeminarRequest(id)
    .then(data => {
      if(data?.status === 200) {
        reloadData()
      } else {
        setHasError(true)
      }}).catch(() => {
        setHasError(true)
      })
      .finally(() => {setIsLoading(false)})
  }, [])

  return (
    <Modal closeHandler={closeHandler} title="Удаление">
      <div className={cls.content}>
        <p>{`Удаление семинара: ${title}`}</p>
        {hasError ? <p className={cls.error}>Не удалось удалить</p> : null}
        <footer className={cls.footer}>
          {hasError ? null : <button disabled={isLoading} onClick={deleteHandler} className={cls.delete}>Удалить</button>}
          <button disabled={isLoading} onClick={closeHandler}>
            {hasError ? "Закрыть" : "Отмена"}
          </button>
        </footer>
      </div>
    </Modal>
  );
};
