import Switch from 'components/atoms/Switch';
import { useTheme } from 'contexts/Theme';
import React from 'react';
import { THEME } from 'common';


const SwitchTheme = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Switch
            isEnabled={theme === THEME.LIGHT}
            toggleSwitch={
                () => {
                    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
                }
            }
        />
    );
};

export default SwitchTheme