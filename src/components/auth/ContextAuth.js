import { createContext, useContext } from "react";

const ContextAuth = createContext();

export const ContextAuthProvider = ContextAuth.Provider;
export const ContextAuthConsumer = ContextAuth.Consumer;

ContextAuth.displayName = " Auth";

export const useAuth = () => {
  const value = useContext(ContextAuth);
  return value;
};

export default ContextAuth;
