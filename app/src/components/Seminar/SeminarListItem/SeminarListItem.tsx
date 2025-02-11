import { FC, useCallback, useReducer } from "react";
import { ListItem } from "../../ListItem/ListItem";
import { SeminarModal } from "../SeminarModal/SeminarModal";
import { DeleteSeminarModal } from "../DeleteSeminarModal/DeleteSeminarModal";
import cls from "./SeminarListItem.module.css";
import { TSeminar } from "../seminar.types";
import {
  EActionType,
  EModalType,
  TModalAction,
  TModalState,
} from "./SeminarListItem.types";

// useReducer для управления состоянием открытого модального окна. 
// модалка может быть или на удаление или на просмотр/редактирование 
const modalReducer = (state: TModalState, action: TModalAction) => {
  const { type } = action;
  switch (type) {
    case EActionType.show:
      return { ...state, modal: EModalType.info, isEdit: false };
    case EActionType.edit:
      return { ...state, modal: EModalType.info, isEdit: true };
    case EActionType.delete:
      return { ...state, modal: EModalType.delete, isEdit: false };
    case EActionType.hide:
      return { ...state, modal: EModalType.hide, isEdit: false };
  }
};

export const SeminarListItem: FC<TSeminar & { reloadData: () => Promise<void>}> = (props) => {
  const { id, title, date, time, reloadData } = props;
  const [modalStore, modalDispatch] = useReducer(modalReducer, {
    modal: EModalType.hide,
    isEdit: false,
  });

  const showInfoModalHandler = useCallback(() => {
    modalDispatch({ type: EActionType.show });
  }, []);

  const editInfoModalHandler = useCallback(() => {
    modalDispatch({ type: EActionType.edit });
  }, []);

  const deleteInfoModalHandler = useCallback(() => {
    modalDispatch({ type: EActionType.delete });
  }, []);

  const closeInfoModalHandler = useCallback(() => {
    modalDispatch({ type: EActionType.hide });
  }, []);

  return (
    <>
      <ListItem
        key={id}
        deleteHandler={deleteInfoModalHandler}
        editHandler={editInfoModalHandler}
      >
        <div key={id} className={cls.item} onClick={showInfoModalHandler}>
          <div>
            <span className={cls.time}>{time}</span>
            <span>{date}</span>
          </div>
          <div>{title}</div>
        </div>
      </ListItem>

      {modalStore.modal === EModalType.info ? (
        <SeminarModal
          {...props}
          editable={modalStore.isEdit}
          closeHandler={closeInfoModalHandler}
        />
      ) : null}

      {modalStore.modal === EModalType.delete ? (
        <DeleteSeminarModal
          closeHandler={closeInfoModalHandler}
          title={title}
          id={id}
          reloadData={reloadData}
        />
      ) : null}
    </>
  );
};
