import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import Persistence from "helpers/Persistence";
import { THEME } from 'common';

type Props = {
    children: React.ReactNode
};

const { LIGHT, DARK, DEFAULT } = THEME;

export interface IThemeContextProps {
    theme: typeof LIGHT | typeof DARK,
    setTheme: (value: typeof LIGHT | typeof DARK) => void
}

export const ThemeContext = React.createContext<IThemeContextProps>({
    theme: DEFAULT,
    setTheme: (value: typeof LIGHT | typeof DARK) => { }
});

export const useThemeHook = () => {
    const persistence = new Persistence(AsyncStorage);

    const [theme, setTheme] = React.useState<typeof LIGHT | typeof DARK>(THEME.DEFAULT);

    const setPersistTheme = async (_theme: typeof LIGHT | typeof DARK) => {
        persistence.store(THEME.PersistenceKey, _theme);
        setTheme(_theme);
    }

    React.useEffect(() => {

        const checkTheme = async () => {
            const currentTheme = await persistence.retreive(THEME.PersistenceKey);

            if (currentTheme) {
                setTheme(currentTheme);
            }
            
        };

        checkTheme();

    }, []);

    return {
        theme,
        setTheme: setPersistTheme
    }
}

export const ThemeProvider = ({ children }: Props) => {

    const { theme, setTheme } = useThemeHook();

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => React.useContext(ThemeContext);
