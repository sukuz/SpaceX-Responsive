import React, { useEffect } from "react";
import FilterComponent from "./filterComponent";
import DataRenderer from "./DataRenderer";
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

  return (
    <div className="app-container">
      <FilterComponent filter={filter} filterAction={filterDataAction} />
      <DataRenderer payloadSpacex={payloadSpacex} showLoader={showLoader} />
    </div>
  );
}
AppContainer.propTypes = {
  fetchData: propTypes.func.isRequired,
  filterDataAction: propTypes.func.isRequired,
  payloadSpacex: propTypes.array.isRequired,
  showLoaderAction: propTypes.func.isRequired,
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
