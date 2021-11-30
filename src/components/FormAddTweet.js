import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationsAction";
import { addTweetAction } from "../actions/tweetsAction";
import { openCloseAddTweetModalAction } from "../actions/modalsAction";
import uuid from "uuid/v4";
import moment from "moment";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: ""
  });

  //   Inicializacion del dispatch y ejecución de las acciones

  const dispatch = useDispatch();
  const validationForm = state => dispatch(validationFormAddTweetAction(state));
  const addTweet = state => dispatch(addTweetAction(state));
  const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

  //   Obtener estado de la validacion del formulario

  const errorFormValue = useSelector(
    state => state.validations.errorFormAddTweet
  );

  const onFormChange = event => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const { name, tweet } = formValue;

    if (!name || !tweet) {
      validationForm(true);
    } else {
      validationForm(false);
      addTweet({
        id: uuid(),
        name,
        tweet,
        date: moment()
      });
      closeModal(false);
    }
  };

  return (
    <Form className="m-3" onChange={onFormChange} onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>Nuevo tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" name="name" placeholder="Escribe tu nombre" />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          name="tweet"
          row="3"
          placeholder="Escribe lo que quieres comunicar..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar Tweet
      </Button>
      {errorFormValue && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios
        </Alert>
      )}
    </Form>
  );
}
