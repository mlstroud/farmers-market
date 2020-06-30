import React from "react";
import Month from "./Month";

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

export default Produce;