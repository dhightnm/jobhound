import React, { useContext, useEffect, useState } from "react";
import { auth } from '../index';

const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
        
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChange(user => {
            setCurrentUser(user);
        });
        
        return unsubscribe;
    }, []);
    
    const value = { currentUser, signup };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default { AuthProvider, useAuth };