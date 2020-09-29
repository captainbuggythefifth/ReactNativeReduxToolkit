import { act, renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { THEME } from 'common';
import ThemedText from 'components/molecules/ThemedText';
import { ThemeProvider, useThemeHook } from 'contexts/Theme';
import React from 'react';

const { LIGHT, DARK, getThemedTextColor } = THEME

describe('ThemedText render', () => {
    let wrapper: RenderAPI;

    const { result, waitForNextUpdate } = renderHook(() => useThemeHook());
    const text = "This is the text";

    beforeEach(() => {
        wrapper = render(
            <ThemeProvider>
                <ThemedText>
                    {text}
                </ThemedText>
            </ThemeProvider>
        );
    });
    it('should display text', () => {
        expect(wrapper.getAllByText(text)).toHaveLength(1);
    });
    it('should receive the theme as props', () => {
        const { theme } = result.current;
        expect(wrapper.getByText(text).props.style.color).toEqual(getThemedTextColor(theme));
    });

    it('should receive the theme as props', async () => {
        act(async () => {
            await result.current.setTheme(DARK);
            const { theme } = result.current;
            expect(wrapper.getByText(text).props.style.color).toEqual(getThemedTextColor(theme));
            expect(result.current.theme).toEqual(DARK);
        });
    });




});