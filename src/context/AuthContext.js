import { createContext } from "react";

export const AuthContext = createContext({
	user: JSON.parse(localStorage.getItem("user")) || null,
	login: () => {},
	logout: () => {},
});

