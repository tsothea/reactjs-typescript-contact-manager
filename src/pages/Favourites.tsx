import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";
// @ts-ignore
import SwitchView from "../components/hook/SwitchView";
import { PersonType, StateType } from "../CustomTypes";
import React from "react";

export default function Favourites() {
  const state: StateType = useSelector((state: StateType) => state);
  const favourites: PersonType[] = state.people.filter((person) => person.isFavourite);

  const [isListView, getListView] = SwitchView();
  return (
    <div id="content">
      <Title title="Favorites" ListView={getListView} />
      <div className="row">
        {favourites.map((item, i) => {
          return (
            <Contact
              data={item}
              index={i}
              favourite="true"
              contact="false"
              isListView={isListView}
            />
          );
        })}
      </div>
    </div>
  );
}
