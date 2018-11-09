import React, { Component } from 'react';
import './styles.css';
import schedule from './schedulejson.js'; 


class Schedule extends Component {

  render() {
    var sched = schedule['schedule']
    return (
      <div style={{textAlign: "center"}}>
        <h1>Schedule</h1>
        <div className="schedulebox">
          <table class="center">
            <tr className="scheduleheader"><th>Event</th><th>Location</th><th>Start Time</th><th>End Time</th></tr>
            {(sched.map(function(item, index) {
              var startDate = new Date(item['startTime']); 
              var endDate = new Date(item['endTime']);
              var testDate = new Date(2000, 1);
              return(<tr className="schedulerow"><td>{item['Name']}</td><td>{item['location']}</td><td>{startDate.toLocaleString('en-US')}</td><td>{(endDate < testDate) ? "N/A" : endDate.toLocaleString('en-US')}</td></tr>);
            }))}
          </table>
        </div>
      </div>
    ); 
  }
}

export default Schedule;