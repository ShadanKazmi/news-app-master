import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const isUserLoggedIn = createContext(null);

export const LogProvider = (props) => {
    const [userState, setUserState] = useState('Logged-Out');
    const [token, setToken] = useState(Cookies.get("token"));

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            setUserState("Logged-In");
            setToken(token);
        }
    }, []);

    const login = (newToken) => {
        if (newToken) {
            setToken(newToken);
            // console.log("I AM HERE NOW", newToken);
            setUserState("Logged-In");
            console.log("You are logged in");
            Cookies.set("token", newToken, { expires: 7 });
        } else {
            console.log("No valid token provided for login.");
        }
    };

    const logout = () => {
        setToken(null);
        setUserState('Logged-Out');
        Cookies.remove("token");
        localStorage.removeItem("userId");
    };

    return (
        <isUserLoggedIn.Provider value={{ userState, setUserState, login, logout }}>
            {props.children}
        </isUserLoggedIn.Provider>
    );
};
