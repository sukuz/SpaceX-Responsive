import React, { useEffect } from "react";

//import ImageComponent from "./history";
import FilterComponent from "./filterComponent";
import LaunchView from "./launchView";

import { connect } from "react-redux";
import fetchData from "./actions/pagenameActions";
import propTypes from "prop-types";
import filterDataAction from "./actions/filterActions";
import showLoaderAction from "./actions/filterActions";

function AppContainer(props) {
  const { payloadSpacex, filter, filterDataAction, showLoader } = props;
  useEffect(() => {
    props.fetchData(filter);
  }, [filter]);

  const renderData = (payloadSpacex) => {
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
  };

  return (
    <>
      <FilterComponent filter={filter} filterAction={filterDataAction} />
      {showLoader ? <h2>Fetching data...</h2> : renderData(payloadSpacex)}
    </>
  );
}
AppContainer.propTypes = {
  fetchData: propTypes.func.isRequired,
  filterDataAction: propTypes.func.isRequired,
  payloadSpacex: propTypes.array.isRequired,
  filterData: propTypes.object.isRequired,
  showLoaderAction: propTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  payloadSpacex: state.payloadSpacex.Payload,
  filter: state.filterReducer.filter,
  showLoader: state.filterReducer.loader,
});

export default connect(mapStateToProps, {
  fetchData,
  filterDataAction,
  showLoaderAction,
})(AppContainer);
