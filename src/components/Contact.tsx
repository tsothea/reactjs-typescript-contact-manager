import Socials from "./helper/Socials";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteContact,
  deleteFavourite,
  saveContact,
  saveFavourite,
} from "../service";
import {PropsType} from "../CustomTypes";
import React from "react";

export default function Contact(props: PropsType) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addContact = () => {
    // @ts-ignore
    saveContact(props.data.key, dispatch);
  };
  const removeContact = () => {
    // @ts-ignore
    deleteContact(props.data.key, dispatch);
  };

  const addFavorite = () => {
    // @ts-ignore
    saveFavourite(props.data.key, dispatch);
  };

  const removeFavorite = () => {
    // @ts-ignore
    deleteFavourite(props.data.key, dispatch);
  };

  const editContact = () => {
    navigate("/people/add", { state: props.data });
  };

  let css = "";
  if (props.isListView) {
    css = "list-view";
  } else {
    css = "col-sm-3 border-column";
  }

  // @ts-ignore
  if (props.index === 0 || props.index % 4 === 0) {
    css += " no-border";
  }
  // @ts-ignore
  if (props.index > 3) {
    css += " no-bottom-border";
  }

  return (
    <div className={css}>
      <div className="card">
        <a href="#" onClick={editContact}>
          <i className="fa fa-edit"></i>
        </a>
        <div className="image justify-content-center align-items-center">
          <span className="thumbnail">
            <img
              src={props.data.avatar}
              alt={props.data.name}
              height="100"
              width="100"
            />
          </span>
          <div className="content">
            <h2 className="name mt-3">{props.data.name}</h2>
            <span className="idd">
              {props.data.company}, {props.data.position}
            </span>
            <Socials data={props.data}></Socials>
            <div className="align-items-center">{props.data.city}</div>
          </div>
          <div className="action-button">
            {props.data.isContact && props.contact === "true" && (
              <button
                onClick={removeContact}
                className="btn btn-default round-border color-border-blue active"
              >
                Delete from contacts
              </button>
            )}
            {!props.data.isContact && props.contact === "true" && (
              <button
                onClick={addContact}
                className="btn btn-default round-border color-border-blue"
              >
                Add to contacts
              </button>
            )}
            {props.data.isFavourite && props.favourite === "true" && (
              <button
                onClick={removeFavorite}
                className="btn btn-default round-border color-border-blue active"
              >
                Delete from favorites
              </button>
            )}

            {props.data.isContact &&
              !props.data.isFavourite &&
              props.favourite === "true" && (
                <button
                  onClick={addFavorite}
                  className="btn btn-default round-border color-border-blue"
                >
                  Add To Favourites
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
