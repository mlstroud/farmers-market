import React from "react";
import PropTypes from "prop-types";

function Day(props) {
  return (
    <React.Fragment>
      <td>{props.day}</td>
      <td>{props.location}</td>
      <td>{props.hours}</td>
      <td>{props.booth}</td>
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

export default Day;