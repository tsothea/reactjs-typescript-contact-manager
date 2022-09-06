import { PersonType } from "../CustomTypes";

export const fetchPeople = (people: PersonType[]) => {
  return {
    type: process.env.REACT_APP_GET_PEOPLE,
    payload: people,
  };
};

export const filterPeople = (param: string) => {
  return {
    type: process.env.REACT_APP_FILTER_PEOPLE,
    payload: { param: param },
  };
};

export const addContact = (key: string) => {
  return {
    type: process.env.REACT_APP_ADD_CONTACT,
    payload: { key: key },
  };
};

export const removeContact = (key: string) => {
  return {
    type: process.env.REACT_APP_REMOVE_CONTACT,
    payload: { key: key },
  };
};

export const addFavorite = (key: string) => {
  return {
    type: process.env.REACT_APP_ADD_FAVOURITE,
    payload: { key: key },
  };
};

export const removeFavorite = (key: string) => {
  return {
    type: process.env.REACT_APP_REMOVE_FAVOURITE,
    payload: { key: key },
  };
};

export const filterLocation = (location: string) => {
  return {
    type: process.env.REACT_APP_GET_LOCATION,
    payload: { location: location },
  };
};

export const viewDisplay = (isListView: boolean) => {
  return {
    type: process.env.REACT_APP_VIEW_DISPLAY,
    payload: { isListView: isListView },
  };
};
