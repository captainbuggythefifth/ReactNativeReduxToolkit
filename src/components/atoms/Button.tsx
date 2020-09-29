import React from 'react';
import { Button as ThirdPartyButton, ButtonProps } from 'react-native-elements'

export const buttonTestId = "buttonTestId";

interface IButtonProps extends ButtonProps{
}

const Button = (props: IButtonProps) => {
    return (
        <ThirdPartyButton
            style={{
                backgroundColor: "white"
            }}
            testID={buttonTestId}
            {...props}
        />
    )
};

export default Button