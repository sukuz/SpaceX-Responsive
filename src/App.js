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
          <h1>SpaceX Launch Programs</h1>
        </header>
        <main>
          <AppContainer />
        </main>
        <footer>Developed by: Sushmita Maity</footer>
      </>
    </Provider>
  );
}

export default App;
