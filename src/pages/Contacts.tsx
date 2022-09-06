import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";
// @ts-ignore
import SwitchView from "../components/hook/SwitchView";
import { PersonType, StateType } from "../CustomTypes";
import React from "react";

export default function Contacts() {
  const state: StateType = useSelector((state: StateType) => state);
  const contacts: PersonType[] = state.people.filter((person) => person.isContact);
  const [isListView, getListView] = SwitchView();

  return (
    <div id="content">
      <Title title="Contacts" ListView={getListView} />

      <div className="row">
        {contacts.map((item: PersonType, i: number) => {
          return (
            <Contact
              data={item}
              index={i}
              favourite="true"
              contact="true"
              isListView={isListView}
            />
          );
        })}
      </div>
    </div>
  );
}
