import { createContext, Dispatch } from "react";

const UserContext = createContext({} as UserContextProps);

export default UserContext;

interface UserContextProps {
  user: User | null;
  setUser: Dispatch<React.SetStateAction<User | null>>;
}

export interface User {
  id: string;
  username: string;
  team: Team | null;
}

interface Team {
  id: string;
  name: string;
}
