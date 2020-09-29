import Text, { ITextProps } from 'components/atoms/Text';
import { useTheme } from 'contexts/Theme';
import React from 'react';

interface IThemedTextProps extends ITextProps {}

const ThemedText = (props: IThemedTextProps) => {
    const { theme } = useTheme()
    return (
        <Text {...props} theme={theme} />
    )
};

export default ThemedText