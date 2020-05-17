import React, { useReducer } from "react";
import uuid from "uuid/v1";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initalState = {
    contacts: [
      {
        type: "professional",
        id: "5ebabd2ed24a95447c735f53",
        name: "John Doe",
        email: "John@gmail.com",
        phone: "212-555-414",
        user: "5eaedb173eb3e0411cb233d5",
        date: "2020-05-12T15:13:50.747Z",
        __v: 0,
      },
      {
        type: "personal",
        id: "5ebabbffb609bc546c335444",
        name: "Melisa williams",
        email: "mes@gmail.com",
        phone: "212-353-414",
        user: "5eaedb173eb3e0411cb233d5",
        date: "2020-05-12T15:08:47.086Z",
        __v: 0,
      },
      {
        type: "personal",
        id: "5eb7ee9c3199925178f259ae",
        name: "Harry black",
        email: "harry@gmail.com",
        phone: "212-313-414",
        user: "5eaedb173eb3e0411cb233d5",
        date: "2020-05-10T12:07:56.983Z",
        __v: 0,
      },
      {
        type: "professional",
        id: "5eb7ede43199925178f259ac",
        name: "Sara Smith",
        email: "sara@gmail.com",
        phone: "111-111-111",
        user: "5eaedb173eb3e0411cb233d5",
        date: "2020-05-10T12:04:52.684Z",
        __v: 0,
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initalState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Current Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Current Contact

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
