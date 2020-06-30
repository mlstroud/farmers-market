import React from "react";
import PropTypes from "prop-types";

function Today(props) {
  return (
    <React.Fragment>
      <div class="col-md-6">
        <h3>{props.day}</h3>
        <p>{props.location}</p>
        <p>{props.hours}</p>
        <p>{props.booth}</p>
      </div>
      <div class="col-md-6">
        <h3>{props.month}</h3>
        <p>
          {props.selection.map((item) =>
            <p>{item}</p>
          )}
        </p>
      </div>
    </React.Fragment>
  );
}

Today.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
}

export default Today;