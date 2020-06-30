import React from "react";
import Month from "./Month";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <div className="row">
      <h3>Produce by Season</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Produce</th>
          </tr>
        </thead>
        <tbody>
          {props.produce.map((months, index) =>
            <tr key={index}>
              <Month month={months.month}
                selection={months.selection} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
}

export default Produce;