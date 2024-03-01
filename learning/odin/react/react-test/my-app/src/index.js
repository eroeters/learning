import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Greeting from "./Greeting";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TestJS from "./TestJS";
import Avatar from "./Avatar";
import ToDoList from "./ToDoList";
import App from "./App";
import PackingList from "./PackingList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Avatar />
    <Greeting />
    <TestJS />
    <ToDoList />
    <App />
    <PackingList />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
