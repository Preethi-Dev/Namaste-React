import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import store from "./app/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
