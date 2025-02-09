import { FC } from "react";
import deleteSvg from "../../assets/delete.svg";
import editSvg from "../../assets/edit.svg";
import cls from "./ListItem.module.css";
import { TListItem } from "./ListItem.types";

export const ListItem: FC<TListItem> = (props) => {
  const { deleteHandler, editHandler, children } = props;

  return (
    <div className={cls.item}>
      <div className={cls.content}>{children}</div>
      <div className={cls.tools}>
        {!!editHandler && (
          <div className={cls.icon} onClick={editHandler}>
            <img src={editSvg} alt="edit" />
          </div>
        )}
        {!!deleteHandler && (
          <div className={cls.icon} onClick={deleteHandler}>
            <img src={deleteSvg} alt="delete" />
          </div>
        )}
      </div>
    </div>
  );
};
