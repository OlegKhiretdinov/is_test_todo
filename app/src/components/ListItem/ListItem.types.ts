import { ReactNode } from "react";

export type TListItem = {
  editHandler?: () => void;
  deleteHandler?: () => void;
  children: ReactNode;
};
