import React from 'react';
import { Switch as RNSwitch } from 'react-native';

interface ISwithProps {
    isEnabled: boolean,
    toggleSwitch: (value: boolean) => void,
    type?: string
}

export const switchTestId = "switchTestId";

export const swithTrackColor = { true: "#81b0ff", false: "#767577" };

export const switchThumbColorEnabled = "#f5dd4b";

export const switchThumbColorDisabled = "#f4f3f4";

export const switchIOSBackgroundColor = "#3e3e3e"

const Switch = ({ isEnabled, toggleSwitch }: ISwithProps) => {
    const thumbColor = isEnabled ? switchThumbColorEnabled : switchThumbColorDisabled;
    return (
        <RNSwitch
            trackColor={swithTrackColor}
            thumbColor={thumbColor}
            ios_backgroundColor={switchIOSBackgroundColor}
            onValueChange={toggleSwitch}
            value={isEnabled}
            testID={switchTestId}
        />
    )
};

export default Switch