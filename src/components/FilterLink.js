import React from "react";
import PropTypes from "prop-types";
import { NavLink as Link } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <Link
    exact
    to={"/" + (filter === "all" ? "" : filter)}
    activeStyle={{
      textDecoration: "none",
      color: "black",
    }}
  >
    {children}
  </Link>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(["all", "completed", "active"]).isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterLink;
