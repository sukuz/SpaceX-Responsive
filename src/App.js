import React from "react";
import "./style.css";
import AppContainer from "./components/AppContainer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const name = "name";
  return (
    <Provider store={store}>
      <>
        <header>
          <h1 style={{ marginTop: "0%", marginLeft: "1%", marginBottom: "0%" }}>
            SpaceX Launch Programs
          </h1>
        </header>
        <div className="app-container">
          <AppContainer />
        </div>
        <footer>Developed by: Sushmita Maity</footer>
      </>
    </Provider>
  );
}

export default App;
