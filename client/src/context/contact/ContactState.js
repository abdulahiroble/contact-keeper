import React, { useReducer } from "react";
import uuid from "uuid";
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
        type: "personal",
        _id: "5eb7ee9c3199925178f259ae",
        name: "Harry black",
        email: "harry@gmail.com",
        phone: "212-313-414",
        user: "5eaedb173eb3e0411cb233d5",
        date: "2020-05-10T12:07:56.983Z",
        __v: 0,
      },
      {
        type: "professional",
        _id: "5eb7ede43199925178f259ac",
        name: "Sara Smith",
        email: "sara@gmail.com",
        phone: "111-111-111",
        user: "5eaedb173eb3e0411cb233d5",
        date: "2020-05-10T12:04:52.684Z",
        __v: 0,
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initalState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Current Contact

  // Filter Current Contact

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
