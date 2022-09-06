import { PersonType } from "../CustomTypes";

export const addNewContact = (params: PersonType) => {
  return {
    type: process.env.REACT_APP_ADD_NEW_CONTACT,
    payload: { params: params },
  };
};

export const editContact = (key?: string, params?: PersonType) => {
  return {
    type: process.env.REACT_APP_EDIT_CONTACT,
    payload: { key: key, params: params },
  };
};
