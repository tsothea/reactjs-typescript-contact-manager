import { removeCompany } from "../service";
import { useDispatch } from "react-redux";
import { PropsType } from "../CustomTypes";
import React from "react";
import {Dispatch} from "redux";

export default function Company(props: PropsType): JSX.Element {
  const dispatch: Dispatch = useDispatch();
  const editCompany = () => {
    //
  };
  const deleteCompany = () => {
    // @ts-ignore
      removeCompany(props.data.key, dispatch);
  };
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.name}</td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <button className="btn btn-info" onClick={editCompany}>
          Edit
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-warning" onClick={deleteCompany}>
          Delete
        </button>
      </td>
    </tr>
  );
}
