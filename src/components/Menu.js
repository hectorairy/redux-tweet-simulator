import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsAction";

import LogoRedux from "../assets/img/logo.png";

export default function Menu() {
  // Dispatch para ejecutar acciones.

  const dispatch = useDispatch();
  const openCloseAddTweetModal = state => {
    dispatch(openCloseAddTweetModalAction(state));
  };

  const openModal = () => {
    openCloseAddTweetModal(true);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt="Tweets Simulator Redux"
            src={LogoRedux}
            width="30"
            height="30"
            className="d-inline-block align-top mr-4"
          />
          Tweets Simulator Redux
        </Navbar.Brand>
        <Button onClick={openModal} variant="outline-success">
          Nuevo tweet
        </Button>
      </Container>
    </Navbar>
  );
}
