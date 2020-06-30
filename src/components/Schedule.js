import React from "react";
import Day from "./Day";
import PropTypes from "prop-types";

function Schedule(props) {
  return (
    <div className="row">
      <h3>Schedule</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Location</th>
            <th>Hours</th>
            <th>Booth</th>
          </tr>
        </thead>
        <tbody>
          {props.schedule.map((days, index) =>
            <tr key={index}>
              <Day day={days.day}
                location={days.location}
                hours={days.hours}
                booth={days.booth} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

Schedule.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object)
}

export default Schedule;