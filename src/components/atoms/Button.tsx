import React from 'react';
import { Button as ThirdPartyButton, ButtonProps } from 'react-native-elements'
import { BUTTON } from 'common';

export const buttonTestId = "buttonTestId";

interface IButtonProps extends ButtonProps{
    _type?: typeof BUTTON.ROUNDED | typeof BUTTON.ROUNDED_FACEBOOK | typeof BUTTON.ROUNDED_GOOGLE | typeof BUTTON.ROUNDED_ROYALBLUE | typeof BUTTON.ROUNDED_WHITE
}

const Button = (props: IButtonProps) => {
    
    const buttonStyle = BUTTON.sButtonStyle[props._type ? props._type : BUTTON.ROUNDED];
    const containerStyle = BUTTON.sContainerStyle[props._type ? props._type : BUTTON.ROUNDED];
    const titleStyle = BUTTON.sTitleStyle[props._type ? props._type : BUTTON.ROUNDED];
    
    return (
        <ThirdPartyButton
            titleStyle={titleStyle}
            containerStyle={containerStyle}
            buttonStyle={buttonStyle}
            testID={buttonTestId}
            {...props}
        />
    )
};

export default Button