import React from "react";
import { Modal as ModalB } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsAction";

export default function Modal(props) {
  const { children } = props;

  // Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();
  const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

  //  useSelector para acceder un valor en el storage
  const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);

  return (
    <ModalB
      show={isOpenModal}
      onHide={() => closeModal(false)}
      size="lg"
      centered
    >
      {children}
    </ModalB>
  );
}
