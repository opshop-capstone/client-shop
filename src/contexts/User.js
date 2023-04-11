import React, { useState, createContext } from "react";

const UserContext = createContext({
  user: { uid: null },
  setUser: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  // setUserInfo -> setUser로 바꾸고 밑에 주석
  // const setUser = ({ uid }) => {
  //   setUserInfo({ uid });
  // };
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
