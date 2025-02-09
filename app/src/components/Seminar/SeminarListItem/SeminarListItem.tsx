import { FC } from "react";
import { TSeminar } from "../seminar.types";
import cls from "./SeminarListItem.module.css";

export const SeminarListItem: FC<TSeminar> = (props) => {
  const { id, title, date, time } = props;

  return (
    <div key={id} className={cls.item}>
      <div>
        <span className={cls.time}>{time}</span>
        <span>{date}</span>
      </div>
      <div>{title}</div>
    </div>
  );
};
