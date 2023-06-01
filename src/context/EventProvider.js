import React, { useState } from "react";
import { EventContext } from "./EventContext";
import axios from "axios";

export const EventProvider = ({ children }) => {

  return (
    <EventContext.Provider
      value={{
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
