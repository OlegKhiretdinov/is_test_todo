import { ReactNode } from "react";

export type TModal = {
  title: string;
  closeHandler: () => void;
  children: ReactNode;
};
