import { act, fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { switchTestId } from 'components/atoms/Switch';
import SwitchTheme from 'components/molecules/SwitchTheme';
import { ThemeProvider } from 'contexts/Theme';
import React from 'react';

describe('SwitchTheme render', () => {
    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(<SwitchTheme />);
    })
    it('should render SwitchTheme component', () => {
        expect(wrapper.getAllByTestId(switchTestId)).toHaveLength(1)
    });

    
});


describe('SwitchTheme interaction', () => {
    let wrapper: RenderAPI;
    beforeEach(() => {
        wrapper = render(
            <ThemeProvider>
                <SwitchTheme />
            </ThemeProvider>
        );
    });
    it('should receive the value of true by default in Switch', async () => {
        
        await act(async () => {
            expect(wrapper.getByTestId(switchTestId).props.value).toBe(true)
        });
        
    });
    it('should receive the value of false when switched in Switch', async () => {
        
        fireEvent(wrapper.getByTestId(switchTestId), 'onValueChange', 'ab');
        await act(async () => {
            
        });
        expect(wrapper.getByTestId(switchTestId).props.value).toBe(false)
        
    });

    it('should toggle value of false and true when switched in Switch', async () => {
        expect(wrapper.getByTestId(switchTestId).props.value).toBe(true);
        fireEvent(wrapper.getByTestId(switchTestId), 'onValueChange', 'ab');
        await act(async () => {
            
        });
        expect(wrapper.getByTestId(switchTestId).props.value).toBe(false)
        
    });
});