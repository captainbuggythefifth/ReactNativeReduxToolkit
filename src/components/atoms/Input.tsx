import React from 'react';
import { Input as ThirdPartyInput, InputProps as ThirdPartyInputProps } from 'react-native-elements';
import { INPUT, THEME } from 'common';

export interface IInputProps extends ThirdPartyInputProps {
    _type?: typeof INPUT.PRIMARY_TYPE | typeof INPUT.SECONDARY_TYPE,
    _theme?: typeof THEME.DARK | typeof THEME.LIGHT | typeof THEME.TEAL,
}

const Input = (props: IInputProps) => {

    const titleStyle = INPUT.sTitleStyle[props._type ? props._type : INPUT.DEFAULT_TYPE];
    const containerStyle = INPUT.sContainerStyle[props._type ? props._type : INPUT.DEFAULT_TYPE];
    const themeStyle = INPUT.sThemeStyle[props._theme ? props._theme : THEME.DEFAULT];
    
    const style = {
        ...containerStyle,
        ...titleStyle,
        ...themeStyle
    };
    
    return (
        <ThirdPartyInput
            containerStyle={containerStyle}
            style={style}
            {...props}
        />
    )
}

export default Input