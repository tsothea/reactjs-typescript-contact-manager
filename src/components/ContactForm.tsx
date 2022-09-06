import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { saveNewContact, updateNewContact } from "../service";
import {Dispatch} from "redux";
import {PersonType} from "../CustomTypes";

const ContactForm = () => {
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const dataContact: PersonType = location.state as PersonType;
  const [formContact, setFormContact] = useState<PersonType>(dataContact);

  const saveCompany = (e: any) => {
    e.preventDefault();
    if (formContact !== null && formContact.key !== undefined) {
      updateNewContact(formContact, dispatch);
    } else {
      saveNewContact(formContact, dispatch);
    }

    navigate("/people");
  };

  const updateFormValue = (e: any) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData: any = { ...formContact };
    newFormData[fieldName] = fieldValue;
    setFormContact(newFormData);
  };

  const updateSocialFormValue = (e: any) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData: any = { ...formContact };
    if (newFormData["social_networks"] === undefined) {
      newFormData["social_networks"] = {};
    }
    newFormData["social_networks"][fieldName] = fieldValue;
    setFormContact(newFormData);
  };

  return (
    <div>
      <form name="form-contact" method="post" className="contact-form">
        <input
          type="hidden"
          name="id"
          value={formContact !== null && formContact.key ? formContact.key : ""}
        />
        <div className="row">
          <div className="col-sm-4">
            <label>Name: </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              name="name"
              value={formContact !== null ? formContact.name : ""}
              className="form-control"
              onChange={updateFormValue}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <label>Company Name: </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              name="company"
              value={
                formContact !== null && formContact.company
                  ? formContact.company
                  : ""
              }
              className="form-control"
              onChange={updateFormValue}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <label>Avatar: </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              name="avatar"
              value={
                formContact !== null && formContact.avatar
                  ? formContact.avatar
                  : ""
              }
              className="form-control"
              onChange={updateFormValue}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <label>City: </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              name="city"
              value={
                formContact !== null && formContact.city ? formContact.city : ""
              }
              className="form-control"
              onChange={updateFormValue}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <label>Position: </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              name="position"
              value={
                formContact !== null && formContact.position
                  ? formContact.position
                  : ""
              }
              className="form-control"
              onChange={updateFormValue}
            />
          </div>
        </div>
        <fieldset>
          <legend>Social Network</legend>
          <div className="row">
            <div className="col-sm-4">
              <label>Facebook: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="facebook"
                value={
                  formContact !== null &&
                  formContact.social_networks &&
                  formContact.social_networks.facebook
                    ? formContact.social_networks.facebook
                    : ""
                }
                className="form-control"
                onChange={updateSocialFormValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label>Instagram: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="instagram"
                value={
                  formContact !== null &&
                  formContact.social_networks &&
                  formContact.social_networks.instagram
                    ? formContact.social_networks.instagram
                    : ""
                }
                className="form-control"
                onChange={updateSocialFormValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label>Linkedin: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="linkedin"
                value={
                  formContact !== null &&
                  formContact.social_networks &&
                  formContact.social_networks.linkedin
                    ? formContact.social_networks.linkedin
                    : ""
                }
                className="form-control"
                onChange={updateSocialFormValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label>Skypse: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="skypse"
                value={
                  formContact !== null &&
                  formContact.social_networks &&
                  formContact.social_networks.skypse
                    ? formContact.social_networks.skypse
                    : ""
                }
                className="form-control"
                onChange={updateSocialFormValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label>Twitter: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="twitter"
                value={
                  formContact !== null &&
                  formContact.social_networks &&
                  formContact.social_networks.twitter
                    ? formContact.social_networks.twitter
                    : ""
                }
                className="form-control"
                onChange={updateSocialFormValue}
              />
            </div>
          </div>
        </fieldset>
        <div className="row">
          <div className="col-sm-12 text-right">
            <NavLink to="/people" className="btn btn-warning">
              {" "}
              Cancel{" "}
            </NavLink>{" "}
            &nbsp; &nbsp;
            <input
              type="button"
              className="btn btn-info"
              onClick={(e) => saveCompany(e)}
              value="Save"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
