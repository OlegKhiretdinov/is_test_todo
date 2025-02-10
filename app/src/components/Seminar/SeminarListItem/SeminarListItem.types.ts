export enum EActionType {
  "show",
  "edit",
  "delete",
  "hide",
}

export enum EModalType {
  "info",
  "delete",
  "hide",
}

export type TModalState = {
  modal: EModalType;
  isEdit: boolean;
};

export type TModalAction = {
  type: EActionType;
};
