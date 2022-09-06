import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {filterPeople} from "../service/actions"
import {StateType} from "../CustomTypes";

const Search = () => {
    const dispatch = useDispatch();
    return (
        <div className="col-sm-6">
            <form method="post" name="form-search" id="frm-search-id" className="nosubmit">
                <input className="nosubmit" type="search" name="search_term" placeholder="Search..." onChange={(e) => dispatch(filterPeople(e.target.value.toLowerCase()))} />
            </form>
        </div>
    )
}

const mapStateToProps = (state: StateType) => ({
    people: state.people,
    param: ''
});

export default connect(mapStateToProps, {filterPeople})(Search);