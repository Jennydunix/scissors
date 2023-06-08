import { useState, useEffect } from "react";

import { AuthContext } from "./AuthContext";
const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	const login = (user) => {
		setUser(user);
	};
	const logout = () => {
		setUser(null);
	};

	const value = {
		user,
		login: login,
		logout: logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
