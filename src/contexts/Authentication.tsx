import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import Persistence from "helpers/Persistence";
import { AUTHENTICATION } from 'common';

type Props = {
    children: React.ReactNode
};

export interface IAuthenticationContextProps {
    authenticated: typeof AUTHENTICATION.DEFAULT,
    setAuthenticated: Function
}

export const AuthenticationContext = React.createContext<IAuthenticationContextProps>({
    authenticated: AUTHENTICATION.DEFAULT,
    setAuthenticated: () => {}
});

export const AuthenticationProvider = ({ children }: Props) => {

    const persistence = new Persistence(AsyncStorage);

    const [authenticated, setAuthenticated] = React.useState<typeof AUTHENTICATION.DEFAULT>(AUTHENTICATION.DEFAULT);

    const setPersistAuthentication = async (_authenticated: typeof AUTHENTICATION.DEFAULT) => {
        persistence.store(AUTHENTICATION.PersistenceKey, _authenticated);
        setAuthenticated(_authenticated);
    }

    React.useEffect(() => {

        const checkAuthenticated = async () => {
            const currentAuthenticated = await persistence.retreive(AUTHENTICATION.PersistenceKey);
            
            if (currentAuthenticated) {
                setAuthenticated(currentAuthenticated);
            }
            
        };

        checkAuthenticated();

    }, []);


    return (
        <AuthenticationContext.Provider value={{
           authenticated,
           setAuthenticated: setPersistAuthentication
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export const useAuthentication = () => React.useContext(AuthenticationContext);
