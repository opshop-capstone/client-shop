import React, { useState, createContext } from "react";

const UserContext = createContext({
  user: { userIdx: null, identification: null, token: null },
  setUserInfo: () => {},
  //createContext에 파라미터로 전달된 값은
  // Context API 에 아무것도 전달되지 않았을때 사용할 기본값이다.
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const setUserInfo = ({ userId, email, jwt }) => {
    setUser({ userId, email, jwt });
  };
  const value = { user, setUserInfo };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
