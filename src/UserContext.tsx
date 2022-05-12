import { createContext, useContext, useState } from "react";
import { User } from "src/types/types";

interface userContextValue {
    user: User;
    setUser: (user: User) => void;
}

interface UserContextProviderProps {
    children: React.ReactNode;
}

const UserContext = createContext<userContextValue | null>(null);

export function UserContextProvider({ children }: UserContextProviderProps) {
    const [user, setUser] = useState(User.ADMIN);
    const contextValue = {
        user: user,
        setUser: setUser
    }
    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>;
}

export function useUserContext() {
    const userContext = useContext(UserContext);
    if (userContext === null) {
        throw new Error(
            "useUserContext must be called from a component that's a child of UserContextProvider"
        );
    }
    return userContext;
}