import React from "react";
import PropTypes from "prop-types";

function Month(props) {
  return (
    <React.Fragment>
      <td>{props.month}</td>
      <td>
        {props.selection.map((item, index) =>
          index !== props.selection.length - 1 ? item + ", " : item)}
      </td>
    </React.Fragment>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
}

export default Month;