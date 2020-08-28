import { FILTER, LOADER } from "../actions/types";

const initialState = {
  filter: { year: "", land: "", launch: "" },
  loader: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADER:
      return { ...state, loader: action.payload };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
