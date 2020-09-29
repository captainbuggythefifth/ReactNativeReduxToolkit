import React, { ReactText } from 'react';
import { Picker as ThirdPartyPicker } from '@react-native-community/picker';
import { TEXT, THEME } from 'common';
import { Platform } from 'react-native';

interface IPickerItemProps {
    label: string,
    value: string | number
}

export interface IPickerProps {
    selectedValue?: string | number | undefined,
    onValueChange: (itemValue: ReactText, itemIndex: number) => void,
    items: IPickerItemProps[],
    theme?: typeof THEME.LIGHT | typeof THEME.DARK
}

export const pickerTestId = "pickerTestId";

const Picker = ({ selectedValue, onValueChange, items, theme = THEME.DEFAULT }: IPickerProps) => {
    const pickerBackgroundColor = THEME.getThemedBackgroundColor(theme);
    const pickerItemColor = THEME.getThemedTextColor(theme);

    const itemStyle = {
        ...TEXT.sTextStyle[TEXT.DEFAULT],
        backgroundColor: pickerBackgroundColor,
        color: pickerItemColor,
    };

    const pickerStyle = {
        width: "100%",
        backgroundColor: pickerBackgroundColor
    }

    return (
        <ThirdPartyPicker
            selectedValue={selectedValue}
            style={pickerStyle}
            testID={pickerTestId}
            onValueChange={onValueChange}
            itemStyle={itemStyle}
            mode={"dropdown"}
        >
            {items.map((item: IPickerItemProps) => {
                return (
                    <ThirdPartyPicker.Item
                        label={item.label}
                        value={item.value}
                        key={item.label}
                        color={pickerItemColor}
                    />
                )
            })}

        </ThirdPartyPicker>
    )
};

export default Picker