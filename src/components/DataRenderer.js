import React from "react";
import LaunchView from "./launchView";

export default function DataRenderer({ payloadSpacex, showLoader }) {
  if (showLoader) {
    return <h2>Fetching data...</h2>;
  } else {
    if (!payloadSpacex || !payloadSpacex.length) {
      return <h2>No results found</h2>;
    }
    return (
      <div className="launchView">
        {payloadSpacex.map((payL) => (
          <LaunchView key={payL.flight_number} {...payL} />
        ))}
      </div>
    );
  }
}
