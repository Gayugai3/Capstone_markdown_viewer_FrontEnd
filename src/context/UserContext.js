import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [mailid, setmailid] = useState();
  const [forgotUser, setforgotUser] = useState();

  const [LoginPerson, setLoginPerson] = useState([]);

  const [markdown, setMarkdown] = useState("# Markdown Viewer");

  return (
    <UserContext.Provider
      value={{
        LoginPerson,
        setLoginPerson,
        mailid,
        setmailid,
        forgotUser,
        setforgotUser,
        markdown,
        setMarkdown,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
