import { render, RenderAPI } from '@testing-library/react-native';
import Icon, { iconTestId } from 'components/atoms/Icon';
import React from 'react';
describe('Icon render', () => {
    let wrapper: RenderAPI;
    const name = 'rowing';
    beforeEach(() => {
        wrapper = render(<Icon name={name} />)
    })
    it('should render Icon component', () => {
        expect(wrapper.getAllByTestId(iconTestId)).toHaveLength(1);
    });
    test.skip('should render Icon component with indicated name props', () => {
        expect(wrapper.getByTestId(iconTestId).props).toHaveLength(1);
    })
})