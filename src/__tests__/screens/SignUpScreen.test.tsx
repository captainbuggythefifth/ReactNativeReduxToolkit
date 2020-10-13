import { render, RenderAPI } from '@testing-library/react-native';
import { signUpTestID } from 'components/organisms/domains/auth/SignUp';
import React from 'react';
import SignUpScreen from 'screens/SignUpScreen';


describe('SignUpScreen render', () => {
    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<SignUpScreen />)
    })
    it('should render SignUp component', () => {
        expect(wrapper.getAllByTestId(signUpTestID)).toHaveLength(1);
    });
});