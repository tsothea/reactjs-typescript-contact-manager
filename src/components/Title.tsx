import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { filterLocation } from "../service/actions";
import {PropsType, StateType} from "../CustomTypes";

const Title = (props: PropsType): JSX.Element => {
  const dispatch = useDispatch();
  const state: StateType = useSelector((state: StateType) => state);

  const locations = [...new Set(state.listPeople.map((person) => person.city))];

  const changeDisplay = (e: any, isGride: boolean) => {
    e.preventDefault();
    // @ts-ignore
    props.ListView(isGride);
  };
  let selectedLocation = state.location;
  let isListView = props.isListView;

  return (
    <div className="header-title">
      <div className="row">
        <div className="col-sm-4">
          <span className="title">{props.title}</span>
          <a href="#" onClick={(e) => changeDisplay(e, false)}>
            <span
              className={"fa fa-th grid " + (!isListView ? " active" : "")}
            ></span>
          </a>
          <a href="#" onClick={(e) => changeDisplay(e, true)}>
            <span
              className={"fa fa-bars grid " + (isListView ? " active" : "")}
            ></span>
          </a>
        </div>
        <div className="col-sm-4">
          <span className="text-center">
            <NavLink to="/people/add" className="btn btn-primary">
              <span className="fa fa-plus mr-3"></span> Add New Contact
            </NavLink>
          </span>
        </div>
        <div className="col-sm-4">
          <span className="text-right">
            <span className="fa fa-map-marker icon-map"></span>
            <select
              className="location-opt"
              name="location"
              value={selectedLocation}
              onChange={(e) => dispatch(filterLocation(e.target.value))}
            >
              <option value="">All</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  people: state.people,
  location: "",
});

export default connect(mapStateToProps, { filterLocation })(Title);
