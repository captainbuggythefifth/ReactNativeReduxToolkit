import Input, { IInputProps } from 'components/atoms/Input';
import { useTheme } from 'contexts/Theme';
import React from 'react';

interface IThemedInputProps extends IInputProps {}

const ThemedInput = (props: IThemedInputProps) => {
    const { theme } = useTheme()
    return (
        <Input {...props} _theme={theme} />
    )
};

export default ThemedInput