import React from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import Icon from 'components/atoms/Icon';
import Input, { IInputProps } from 'components/atoms/Input';
import { INPUT, THEME } from 'common';

const placeholder = "This is the placeholder";


describe('Input render', () => {
    let wrapper: RenderAPI;
    const onChangeText = jest.fn();
    let props: IInputProps = {
        _type: INPUT.DEFAULT_TYPE,
        placeholder,
        onChangeText,
    };
    beforeEach(() => {
        wrapper = render(<Input {...props} />)
    })
    it('should display placeholder as props', () => {
        expect(wrapper.getAllByPlaceholderText(placeholder)).toHaveLength(1);
    });
    it('should have the styles given as props type and default theme', () => {

        const titleStyle = INPUT.sTitleStyle[INPUT.DEFAULT_TYPE];
        const containerStyle = INPUT.sContainerStyle[INPUT.DEFAULT_TYPE];
        const themeStyle = INPUT.sThemeStyle[THEME.DEFAULT];

        const style = {
            ...containerStyle,
            ...titleStyle,
            ...themeStyle
        };

        expect(wrapper.getByPlaceholderText(placeholder).props.style).toEqual(style);
    });

    it('should have the styles given as props type and dark theme', () => {
        wrapper = render(<Input {...props} _theme={THEME.DARK} />)
        
        const titleStyle = INPUT.sTitleStyle[INPUT.DEFAULT_TYPE];
        const containerStyle = INPUT.sContainerStyle[INPUT.DEFAULT_TYPE];
        const themeStyle = INPUT.sThemeStyle[THEME.DARK];

        const style = {
            ...containerStyle,
            ...titleStyle,
            ...themeStyle
        };
        
        expect(wrapper.getByPlaceholderText(placeholder).props.style).toEqual(style);
    });
    /* it('should display leftIcon as props', () => {

    });
    it('should display rightIcon as props'); */
});

describe('Input interaction', () => {
    let wrapper: RenderAPI;
    const onChangeText = jest.fn();
    let props: IInputProps = {
        _type: INPUT.DEFAULT_TYPE,
        placeholder,
        onChangeText
    };

    beforeEach(() => {
        wrapper = render(<Input {...props} />)
    })

    it('should get the typed text from onChangeText props', () => {
        const typedValue = "typed value";
        const target = wrapper.getByPlaceholderText(placeholder);
        fireEvent.changeText(target, typedValue);
        expect(onChangeText).toHaveBeenCalledTimes(1);

        // expect(wrapper.getByPlaceholderText(placeholder)).toHaveLength(1);
    });
});