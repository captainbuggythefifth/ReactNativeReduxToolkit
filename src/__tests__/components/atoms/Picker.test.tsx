import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { TEXT, THEME } from 'common';
import Picker, { pickerTestId } from 'components/atoms/Picker';
import React from 'react';

describe('Picker render', () => {
    let wrapper: RenderAPI;
    const onValueChange = jest.fn();
    const items = [{
        label: "this is the label 1",
        value: "this is the value 1"
    }, {
        label: "this is the label 2",
        value: "this is the value 2"
    }]


    it('should display Picker component', () => {
        wrapper = render(<Picker onValueChange={onValueChange} items={items} />)
        const itemToCheck = {
            ...items[0],
            textColor: THEME.nativeColors[THEME.DEFAULT] // TEXT.PRIMARY_NATIVE_COLOR_WHITE
        };

        const foundItem = wrapper.getByTestId(pickerTestId).props.items.find((item: any) => item.label === itemToCheck.label);

        expect(foundItem).toEqual(itemToCheck);
    });
    it('should display the default given value', () => {
        const selectedIndex = 1
        const selectedItem = items[selectedIndex];
        wrapper = render(<Picker onValueChange={onValueChange} items={items} selectedValue={selectedItem.value} />)
        
        expect(wrapper.getByTestId(pickerTestId).props.selectedIndex).toEqual(selectedIndex);
    });
    it('should display given the items', () => {
        const itemsExpectedFromPicker = items.map((item: any) => {
            return {
                ...item,
                textColor: THEME.nativeColors[THEME.DEFAULT]
            }
        })
        wrapper = render(<Picker onValueChange={onValueChange} items={items} />);
        expect(wrapper.getByTestId(pickerTestId).props.items).toEqual(itemsExpectedFromPicker);
    });
});

describe('Picker interaction', () => {
    let wrapper: RenderAPI;
    let onValueChange = jest.fn();
    const items = [{
        label: "this is the label 1",
        value: "this is the value 1"
    }, {
        label: "this is the label 2",
        value: "this is the value 2"
    }];

    const selectedValue = 1;

    beforeEach(() => {
        wrapper = render(<Picker onValueChange={onValueChange} items={items} />);
    });
    it('should able to pick from given selections', () => {
        fireEvent(wrapper.getByTestId(pickerTestId), 'onValueChange', selectedValue);
        expect(onValueChange).toHaveBeenCalledTimes(1);
    });
    
});