import { act, renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, RenderAPI, waitFor } from '@testing-library/react-native';
import { THEME } from 'common';
import { switchTestId } from 'components/atoms/Switch';
import SwitchTheme from 'components/molecules/SwitchTheme';
import ThemedInput from 'components/molecules/ThemedInput';
import ThemedText from 'components/molecules/ThemedText';
import { ThemeProvider, useThemeHook } from 'contexts/Theme';
import React from 'react';
import { Switch } from 'react-native';

const { LIGHT, DARK, getThemedTextColor } = THEME

describe('ThemedText render', () => {
    let wrapper: RenderAPI;

    const { result, waitForNextUpdate } = renderHook(() => useThemeHook());
    const text = "This is the text";

    beforeEach(() => {
        wrapper = render(
            <ThemeProvider>
                <SwitchTheme />
                <ThemedInput placeholder={text} />
            </ThemeProvider>
        );
    });
    it('should display text', () => {
        expect(wrapper.getAllByPlaceholderText(text)).toHaveLength(1);
    });
    
    it('should receive the theme as props', () => {
        const { theme } = result.current;
        expect(wrapper.getByPlaceholderText(text).props.style.color).toEqual(THEME.getThemedInputTextColor(theme));
    });

    it('should receive the theme as props when set', async () => {
        
        fireEvent(wrapper.getByTestId(switchTestId), 'onValueChange', 'ab');
        
        act(async () => {

        });

        await waitFor(() => expect(wrapper.getByPlaceholderText(text).props.style.color).toEqual(getThemedTextColor(THEME.DARK)));

    });
});