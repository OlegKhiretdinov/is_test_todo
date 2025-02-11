export type TDeleteSeminarModal = {
  closeHandler: () => void;
  title: string;
  id: string;
  reloadData: () => Promise<void>
};
