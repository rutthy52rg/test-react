import { createContext } from "react";

const ContextAuth = createContext();

export const ContextAuthProvider = ContextAuth.Provider;
export const ContextAuthConsumer = ContextAuth.Consumer;

ContextAuth.displayName = " Auth";

export default ContextAuth;
