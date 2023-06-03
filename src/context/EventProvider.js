import React from "react";
import { EventContext } from "./EventContext";

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
