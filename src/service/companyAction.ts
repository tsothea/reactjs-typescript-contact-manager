import { CompanyType } from "../CustomTypes";

export const fetchCompanies = (companies: CompanyType[]) => {
  return {
    type: process.env.REACT_APP_GET_COMPANIES,
    payload: { companies: companies },
  };
};

export const addCompany = (company: CompanyType) => {
  return {
    type: process.env.REACT_APP_ADD_COMPANY,
    payload: { company: company },
  };
};

export const editCompany = (company: CompanyType) => {
  return {
    type: process.env.REACT_APP_EDIT_COMPANY,
    payload: { company: company },
  };
};

export const deleteCompany = (key: string) => {
  return {
    type: process.env.REACT_APP_DELETE_COMPANY,
    payload: { key: key },
  };
};
