import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Weather defaultCity="Dnipro" />
        <Footer />
      </div>
    </Provider>
  );
}
