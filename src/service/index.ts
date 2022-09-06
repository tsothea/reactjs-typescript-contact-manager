import axios from "axios";
import { Dispatch } from "redux";
import { PersonType, CompanyType, ResponseType } from "../CustomTypes";
import {
  addContact,
  addFavorite,
  fetchPeople,
  removeContact,
  removeFavorite,
} from "./actions";
import { addCompany, deleteCompany, fetchCompanies } from "./companyAction";
import { addNewContact, editContact } from "./contactAction";

export const getPeople = async (dispatch: Dispatch) => {
  return await axios
    .get(process.env.REACT_APP_FIREBASE_URL + "/people.json")
    .then((response: ResponseType) => {
      let people: PersonType[] = [];
      Object.entries(response.data).forEach(([index, value]) => {
        people.push({ ...value, key: index });
      });
      dispatch(fetchPeople(people));
    });
};

export const saveContact = async (key: string, dispatch: Dispatch) => {
  let updateData = { isContact: true };
  await axios
    .patch(
      process.env.REACT_APP_FIREBASE_URL + "/people/" + key + ".json",
      updateData
    )
    .then(() => {
      dispatch(addContact(key));
    });
};

export const deleteContact = async (key: string, dispatch: Dispatch) => {
  let updateData = { isContact: false, isFavourite: false };
  await axios
    .patch(
      process.env.REACT_APP_FIREBASE_URL + "/people/" + key + ".json",
      updateData
    )
    .then(() => {
      dispatch(removeContact(key));
    });
};

export const saveFavourite = async (key: string, dispatch: Dispatch) => {
  let updateData = { isFavourite: true };
  await axios
    .patch(
      process.env.REACT_APP_FIREBASE_URL + "/people/" + key + ".json",
      updateData
    )
    .then(() => {
      dispatch(addFavorite(key));
    });
};

export const deleteFavourite = async (key: string, dispatch: Dispatch) => {
  let updateData = { isFavourite: false };
  await axios
    .patch(
      process.env.REACT_APP_FIREBASE_URL + "/people/" + key + ".json",
      updateData
    )
    .then(() => {
      dispatch(removeFavorite(key));
    });
};

export const getCompanies = async (dispatch: Dispatch) => {
  return await axios
    .get(process.env.REACT_APP_FIREBASE_URL + "/companies.json")
    .then((response: ResponseType) => {
      let companies: CompanyType[] = [];
      Object.entries(response.data).forEach(([index, value]) => {
        companies.push({ ...value, key: index });
      });
      dispatch(fetchCompanies(companies));
    });
};

export const addNewCompany = async (company: CompanyType, dispatch: Dispatch) => {
  return await axios
    .post(process.env.REACT_APP_FIREBASE_URL + "/companies.json", company)
    .then(() => {
      dispatch(addCompany(company));
    });
};

export const editCompany = async (dispatch: Dispatch) => {
  return await axios
    .get(process.env.REACT_APP_FIREBASE_URL + "/companies.json")
    .then((response) => {
      dispatch(fetchCompanies(response.data));
    });
};

export const removeCompany = async (key: string, dispatch: Dispatch) => {
  return await axios
    .delete(process.env.REACT_APP_FIREBASE_URL + "/companies/" + key + ".json")
    .then(() => {
      dispatch(deleteCompany(key));
    });
};

export const saveNewContact = async (formData: PersonType, dispatch: Dispatch) => {
  await axios
    .post(process.env.REACT_APP_FIREBASE_URL + "/people.json", formData)
    .then((response) => {
      formData["key"] = response.data["name"];
      dispatch(addNewContact(formData));
    });
};

export const updateNewContact = async (formData: PersonType, dispatch: Dispatch) => {
  await axios
    .patch(
      process.env.REACT_APP_FIREBASE_URL + "/people/" + formData.key + ".json",
      formData
    )
    .then(() => {
      dispatch(editContact(formData.key, formData));
    });
};
