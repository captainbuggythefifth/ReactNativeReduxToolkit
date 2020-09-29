import { TEXT, THEME } from 'common';
import React from 'react';
import { Text as TextRN, TextStyle } from 'react-native'

export interface ITextProps {
    children: string | number,
    type?: typeof TEXT.PRIMARY | typeof TEXT.SECONDARY,
    customStyle?: TextStyle,
    theme?: typeof THEME.LIGHT | typeof THEME.DARK
}

const Text = ({ children, type = TEXT.DEFAULT, customStyle = {}, theme = THEME.DEFAULT }: ITextProps) => {
    const style = TEXT.sTextStyle[type];
    const sTheme = THEME.sThemedTextColor[theme];
    return (
        <TextRN style={{
            ...style,
            ...customStyle,
            ...sTheme
        }}>
            {children}
        </TextRN>
    )
};

export default Text