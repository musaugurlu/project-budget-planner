import React, { useState } from "react";
import axios from "axios";
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import ProjectExpense from "./components/ProjectExpense";
import ProjectList from "./components/ProjectList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  axios.defaults.baseURL = "http://localhost:8090";
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastId="1"
      />
      <Switch>
        <Route path="/login">
          <Login updateToken={setToken} />
        </Route>
        <Route path="/signup" component={Signup} />
        <Route path="/">
          <NavHeader />
          <Route exact path="/" component={ProjectList} />
          <Route exact path="/projects" component={ProjectList} />
          <Route path="/projects/:projectId" component={ProjectExpense} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;