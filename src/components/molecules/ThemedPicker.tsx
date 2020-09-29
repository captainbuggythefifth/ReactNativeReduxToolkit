import Picker, { IPickerProps } from 'components/atoms/Picker';
import { useTheme } from 'contexts/Theme';
import React from 'react';

interface IThemedPickerProps extends IPickerProps {}

const ThemedPicker = (props: IThemedPickerProps) => {
    const { theme } = useTheme();
    
    return (
        <Picker {...props} theme={theme} />
    )
};

export default ThemedPicker