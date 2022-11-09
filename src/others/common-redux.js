import { Reducer } from "react";

export interface ICommonAppState {
  loggedInUser: ILoggedInUser;
  selectedItems: IItem[];
}
export interface IGetLoggedInUserInfoAction
  extends Action<"GetLoggedInUserInfo"> {
  data: ILoggedInUser;
}
export interface ISelecteItemAction extends Action<"selectItem"> {
  data: IItem[];
}
export interface IGetSelectedItemsAction extends Action<"GetSelectedItems"> {
  data: IItem[];
}
