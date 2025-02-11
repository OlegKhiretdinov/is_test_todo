import { TSeminar } from "../seminar.types";

export type TSeminarModal = TSeminar & {
  closeHandler: () => void;
  editable?: boolean;
  reloadData: () => Promise<void>
};
