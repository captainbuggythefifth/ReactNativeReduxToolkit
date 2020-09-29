import { act, renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { THEME } from 'common';
import { pickerTestId } from 'components/atoms/Picker';
import Switch, { switchTestId } from 'components/atoms/Switch';
import SwitchTheme from 'components/molecules/SwitchTheme';
import ThemedPicker from 'components/molecules/ThemedPicker';
import { useLanguage, useLanguageHook } from 'contexts/Language';
import { ThemeProvider, useTheme, useThemeHook } from 'contexts/Theme';
import React from 'react';

describe('ThemedPicker render', () => {
    let wrapper: RenderAPI;

    const theme = renderHook(() => useThemeHook());
    const language = renderHook(() => useLanguageHook());

    let onValueChange = jest.fn();

    beforeEach(() => {
        wrapper = render(

            <ThemeProvider>
                <SwitchTheme />
                <ThemedPicker items={language.result.current.availableLanguages} onValueChange={onValueChange}/>
            </ThemeProvider>
        );
    });
    it('should render Picker correctly', () => {
        expect(wrapper.getAllByTestId(pickerTestId)).toHaveLength(1);
    });
    it('should render Picker with correct theme property', async () => {
        console.log("Before: ", theme.result.current.theme);
        

        fireEvent(wrapper.getByTestId(switchTestId), 'onValueChange', 'ab');
        // theme.result.current.setTheme(THEME.DARK);
        theme.result.current.setTheme(THEME.DARK);
        act(async () => {
            
            // const { theme } = result.current;
            // await theme.waitForNextUpdate();
            
            
        });        

        console.log("after: ", theme.result.current.theme);

       
        

    });
})