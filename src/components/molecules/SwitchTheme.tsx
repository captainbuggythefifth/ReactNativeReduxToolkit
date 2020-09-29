import Switch from 'components/atoms/Switch';
import { useTheme } from 'contexts/Theme';
import React from 'react';


const SwitchTheme = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Switch
            isEnabled={theme === "light"}
            toggleSwitch={
                () => {
                    setTheme(theme === "light" ? "dark" : "light")
                }
            }
        />
    );
};

export default SwitchTheme