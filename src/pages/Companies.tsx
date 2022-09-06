import Title from "../components/Title";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Company from "../components/Company";
import Modal from "react-modal";
import { addNewCompany } from "../service";
import {CompanyType, PersonType, StateType} from "../CustomTypes";

Modal.setAppElement(
    document.getElementById("root") as HTMLElement
);
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Companies() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formCompany, setCompanyForm] = useState<CompanyType>({} as CompanyType);
  const state: StateType = useSelector((state: StateType) => state);
  const companies: CompanyType[] = state.companies;
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const saveCompany = (e: any) => {
    e.preventDefault();
    addNewCompany(formCompany, dispatch);
    setIsOpen(false);
  };

  const updateFormValue = (e: any) => {
    setCompanyForm({ name: e.target.value });
  };
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <div id="content">
      <Title title="Companies" ListView={function (isGride: boolean): void {
        throw new Error("Function not implemented.");
      }} />
      <div className="text-right">
        <button className="btn btn-success" onClick={openModal}>
          Add New Company
        </button>
      </div>
      <br />
      <br />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>New Company</h2>
        <form name="form-company" method="post" className="inline">
          <input
            name="name"
            className="form-control"
            onChange={updateFormValue}
          />
          <input
            type="button"
            className="btn btn-info"
            onClick={(e) => saveCompany(e)}
            value="Save"
          />
        </form>
      </Modal>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Company Name</th>
            <th>Company Address</th>
            <th>Company Email</th>
            <th>Company Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item, i) => {
            return <Company name={item.name} index={i + 1} data={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
