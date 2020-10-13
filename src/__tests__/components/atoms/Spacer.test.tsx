import { render, RenderAPI } from '@testing-library/react-native';
import Spacer, { spacerTestID } from 'components/atoms/Spacer';
import React from 'react';

describe('Spacer render', () => {
    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<Spacer />)
    });
    it('should render View component', () => {
        expect(wrapper.getAllByTestId(spacerTestID)).toHaveLength(1);
    });
    it('should render have style of default', () => {
        const target = wrapper.getByTestId(spacerTestID);
        expect('height' in target.props.style).toBe(true);
    });
    it('should render have style of height passed as props if fixed', () => {
        const height = 10;
        const isFixed = true;

        wrapper = render(<Spacer height={height} isFixed={isFixed} />);
        
        const target = wrapper.getByTestId(spacerTestID);

        expect(target.props.style.height).toEqual(height);
    });
})