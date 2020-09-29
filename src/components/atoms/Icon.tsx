import React from 'react';
import { Icon as ThirdParyIcon, IconProps } from 'react-native-elements';

export const iconTestId = "iconTestId"

interface IIconProps extends IconProps {

}

const Icon = (props: IIconProps) => {
    return (
        <ThirdParyIcon
            {...props}
            testID={iconTestId}
        />
    )
};

export default Icon