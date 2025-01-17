import React, { createContext, useState } from "react"; // Import useState

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setuser] = useState({
    email: "",
    fullname: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <userDataContext.Provider value={[user, setuser]}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
