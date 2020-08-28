import React from "react";

function LaunchView(props) {
  return (
    <>
      <div className="eachLaunch">
        <div className="imageContainer">
          <img
            src={props.links.mission_patch_small}
            alt="launchimg"
            className="launchImage"
          />
        </div>
        <b style={{ color: "blue" }}>
          {props.mission_name} #{props.flight_number}
        </b>
        <br />
        <br />
        <b>Mission Ids :</b> {props.mission_id}
        <br />
        <b> Launch Year:</b> {props.launch_year}
        <br />
        <b> Successful Launch: </b>
        {props.launch_success}
        <br />
        <b> Successful Landing: </b>
        {props.rocket.first_stage.cores[0].land_success}
        <br />
      </div>
    </>
  );
}
export default LaunchView;
