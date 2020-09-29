import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import Switch, { switchIOSBackgroundColor, switchTestId, switchThumbColorDisabled, switchThumbColorEnabled, swithTrackColor } from 'components/atoms/Switch';
import React from 'react';

describe('Switch render', () => {
    let wrapper: RenderAPI;
    let onPress = jest.fn();
    beforeEach(() => {
        wrapper = render(<Switch isEnabled={true} toggleSwitch={onPress} />);
    });
    it('should render Switch component', () => {
        expect(wrapper.getAllByTestId(switchTestId)).toHaveLength(1);
    });

    it('should have default values', () => {
        expect(wrapper.getByTestId(switchTestId).props.style[1].backgroundColor).toEqual(switchIOSBackgroundColor);
        expect(wrapper.getByTestId(switchTestId).props.onTintColor).toEqual(swithTrackColor.true);
        expect(wrapper.getByTestId(switchTestId).props.tintColor).toEqual(swithTrackColor.false);
    });

    it('should have values when enabled', () => {
        expect(wrapper.getByTestId(switchTestId).props.thumbTintColor).toEqual(switchThumbColorEnabled);
    });

    it('should have values when enabled', () => {
        wrapper = render(<Switch isEnabled={false} toggleSwitch={onPress} />);
        expect(wrapper.getByTestId(switchTestId).props.thumbTintColor).toEqual(switchThumbColorDisabled);
    });

});

describe('Switch interaction', () => {
    let wrapper: RenderAPI;
    let toggleSwitch = jest.fn();
    beforeEach(() => {
        wrapper = render(<Switch isEnabled={true} toggleSwitch={toggleSwitch} />);
    });
    it('should call the toggleSwitch', () => {
        fireEvent(wrapper.getByTestId(switchTestId), 'onValueChange', 'ab');
        expect(toggleSwitch).toHaveBeenCalledTimes(1);
    });
})