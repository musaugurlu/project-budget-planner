import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import { login } from "../services/ApiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "ownername",
          res.data.firstName + " " + res.data.lastName
        );
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");
        toast.success("✔️ Successfully logged in!");
        history.push("/");
      })
      .catch((err) => {
        toast.error("🔥 Login failed!", { toastId: 1 });
        localStorage.removeItem("token");
      });
  }

  return (
    <div className="Login">
      <h2 className="head">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
