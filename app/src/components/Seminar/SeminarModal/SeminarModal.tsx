import { FC, FormEvent, useCallback, useState } from "react";
import { Modal } from "../../Modal/Modal";
import { editSeminarRequest } from "../../../api/request";
import cls from "./SeminarModal.module.css";
import { TSeminarModal } from "./SeminarModal.types";


export const SeminarModal: FC<TSeminarModal> = (props) => {
  const { id, title, date, description, photo, time, closeHandler, editable, reloadData } =
    props;
  const [hasError, setHasError] = useState(false)

  const submitHadler = useCallback((e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      id,
      title: formData.get("title"),
      description: formData.get("description"),
      date: formData.get("date"),
      time: formData.get("time"),
      photo: formData.get("photo"),
    }

    editSeminarRequest(data as TSeminarModal)
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
    <Modal closeHandler={closeHandler} title="Семинар">
      <div className={cls.modal}>
        <form className={cls.form} id="seminar" onSubmit={submitHadler}>
          <input name="title" disabled={!editable} defaultValue={title} />
          <input name="description" disabled={!editable} defaultValue={description} />
          <input name="time" disabled={!editable} defaultValue={time} />
          <input name="date" disabled={!editable} defaultValue={date} />
          <input name="photo" disabled={!editable} defaultValue={photo} />
        </form>
        {hasError ? <p className={cls.error}>Не удалось отредактировать</p> : null}
        {editable ? (
          <footer className={cls.footer}>
            {hasError ? null : <button type="submit" form="seminar">Сохранить</button>}
            <button onClick={closeHandler}>{hasError ? "Закрыть" : "Отмена"}</button>
          </footer>
        ) : null}
      </div>
    </Modal>
  );
};
