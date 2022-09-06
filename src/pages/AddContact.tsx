import React from "react";
import ContactForm from "../components/ContactForm";
import {PropsType} from "../CustomTypes";

export default function AddContact(props: PropsType) {
  return (
    <div id="content">
      <h2>Add new contact</h2>
      <div className="row">
        <ContactForm />
      </div>
    </div>
  );
}
