import { PAYLOAD, LOADER } from "./types";

const fetchData = ({ year, land, launch }) => {
  let fetchURL = "https://api.spacexdata.com/v3/launches?limit=100";

  if (year) {
    fetchURL = `${fetchURL}&launch_year=${year}`;
  }
  if (land) {
    fetchURL = `${fetchURL}&land_success=${land}`;
  }
  if (launch) {
    fetchURL = `${fetchURL}&launch_success=${launch}`;
  }

  return (dispatch) => {
    dispatch({ type: LOADER, payload: true });
    fetch(fetchURL)
      .then((res) => res.json())
      .then((payloadSpacex) => {
        dispatch({ type: LOADER, payload: false });
        dispatch({ type: PAYLOAD, payload: payloadSpacex });
      })
      .catch((err) => {
        dispatch({ type: LOADER, payload: false });
        console.log(err);
      });
  };
};
export default fetchData;
