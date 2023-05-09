import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HelmetComponent from "../../components/utility/Helmet";
import styles from "./auth.module.css";

const ResetPassword = () => {
  return (
    <section
      className={`py-5`}
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "500px",
      }}
    >
      <HelmetComponent title="Login" />
      <Container className="d-flex justify-content-center align-items-center">
        <div
          className={`bg-white p-4 mt-5 rounded-1 ${styles.login}`}
          style={{
            boxShadow: "-2px 2px 10px 0px #f1f1f1",
          }}
        >
          <h4 className="text-center mb-4">Reset Password</h4>
          <form className="d-flex flex-column text-center" action="">
            <input
              className="mb-2 ps-2 border-0 rounded-pill"
              type="password"
              placeholder="password"
            />
            <input
              className="mb-2 ps-2 border-0 rounded-pill"
              type="password"
              placeholder="Conferm password"
            />
            <Link to="/login">
              <Button
                variant="dark"
                className={`rounded-pill border-0 px-4 mt-2`}
              >
                Send
              </Button>
            </Link>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ResetPassword;
