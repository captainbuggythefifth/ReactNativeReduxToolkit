
import React from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import Button, { buttonTestId } from 'components/atoms/Button';
import { Icon } from 'react-native-elements';

describe('Button render', () => {
    let wrapper: RenderAPI
    beforeEach(() => {
        wrapper = render(<Button />)
    })
    it('should render Button', () => {
        
    });

    it('should render Button with title props', () => {
        const title = "This is the title"
        wrapper = render(<Button title={title} />);

        expect(wrapper.getAllByText(title)).toHaveLength(1);
    });

    test.skip('should render Button with Icon props', () => {
        const name = 'rowing';
        const icon = <Icon name={name} />
        wrapper = render(<Button icon={icon} />);
        
        expect(wrapper.getByTestId(buttonTestId).props.icon).toHaveLength(1);
    });
});

describe('Button interaction', () => {
    let wrapper: RenderAPI;
    const title = "This is the title"
    let onPress = jest.fn()
    beforeEach(() => {
        wrapper = render(<Button title={title} onPress={onPress} />)
    })

    it('should on onPress function when passed as props', () => {
        fireEvent.press(wrapper.getByText(title));
        expect(onPress).toHaveBeenCalledTimes(1);
    })
})