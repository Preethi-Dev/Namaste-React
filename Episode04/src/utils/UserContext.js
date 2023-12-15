import { createContext } from "react";

const UserContext = createContext({
  loggedInInfo: "default user",
});

export default UserContext;
