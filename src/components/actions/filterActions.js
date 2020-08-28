import { FILTER } from "./types";
import { LOADER } from "./types";

export const showLoaderAction = (showLoader) => {
  return (dispatch) => dispatch({ type: LOADER, payload: showLoader });
};

const filterDataAction = (filteredData) => {
  return (dispatch) => dispatch({ type: FILTER, payload: filteredData });
};
export default filterDataAction;
