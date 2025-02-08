import { FC } from "react";
import loaderSvg from "../../assets/loader.svg";
import cls from "./loader.module.css";

export const Loader: FC = () => {
  return (
    <div className={cls.loader}>
      <img src={loaderSvg} />
    </div>
  );
};
