import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {} // better IDE completion
});

export default AuthContext;