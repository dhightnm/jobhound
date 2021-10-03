import React, { useContext, useState } from "react";
import { auth } from '../index';

const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const value = { currentUser };

    const signup = (email, password) => {
       return auth.createUserWithEmailAndPassword(email, password);

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default { AuthProvider, useAuth };