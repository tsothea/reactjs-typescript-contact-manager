import React from "react";
import { Link } from "react-router-dom";
import {PropsType} from "../../CustomTypes";

export default function Socials(props: PropsType) {
  return (
    <div className="align-items-center">
      {props.data.social_networks.facebook?.length > 0 && (
        <span className="social-icon">
          <Link to={props.data.social_networks.facebook}>
            <i className="fa fa-facebook-f"></i>
          </Link>
        </span>
      )}
      {props.data.social_networks.twitter?.length > 0 && (
        <span className="social-icon">
          <Link to={props.data.social_networks.twitter}>
            <i className="fa fa-twitter"></i>
          </Link>
        </span>
      )}
      {props.data.social_networks.instagram?.length > 0 && (
        <span className="social-icon">
          <Link to={props.data.social_networks.instagram}>
            <i className="fa fa-instagram"></i>
          </Link>
        </span>
      )}
      {props.data.social_networks.youtube?.length > 0 && (
        <span className="social-icon">
          <Link to={props.data.social_networks.youtube}>
            <i className="fa fa-youtube"></i>
          </Link>
        </span>
      )}
    </div>
  );
}
