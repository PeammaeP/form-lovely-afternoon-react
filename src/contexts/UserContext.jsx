import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("Peam");
  const [lastName, setLastName] = useState("MiiZ");

  return (
    <UserContext.Provider
      value={{ firstName, setFirstName, lastName, setLastName }}
    >
      {children}
    </UserContext.Provider>
  );
};
