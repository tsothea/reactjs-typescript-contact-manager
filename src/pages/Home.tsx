import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";
// @ts-ignore
import SwitchView from "../components/hook/SwitchView";
import { PersonType, StateType } from "../CustomTypes";
import React from "react";

export default function Home() {
  const state: StateType = useSelector((state: StateType) => state);
  const people: PersonType[] = state.people;

  const [isListView, getListView] = SwitchView();
  return (
    <div id="content">
      <Title title="Home" ListView={getListView} />
      <div className="row">
        {people.map((item, i) => {
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
