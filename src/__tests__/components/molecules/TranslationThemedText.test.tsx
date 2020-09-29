import { renderHook } from '@testing-library/react-hooks';
import { act, fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { LANGUAGE } from 'common';
import { pickerTestId } from 'components/atoms/Picker';
import LanguagePicker from 'components/molecules/LanguagePicker';
import SwitchTheme from 'components/molecules/SwitchTheme';
import TranslationThemedText from 'components/molecules/TranslationThemedText';
import { LanguageProvider, useLanguage, useLanguageHook } from 'contexts/Language';
import { ThemeProvider } from 'contexts/Theme';
import React from 'react';

describe('TranslationThemedText render', () => {
    let wrapper: RenderAPI;
    const text = "hello";

    const language = renderHook(() => useLanguage());

    beforeEach(() => {
        wrapper = render(
            <LanguageProvider>
                <ThemeProvider>
                    <TranslationThemedText text={text} />
                    <LanguagePicker />
                </ThemeProvider>
            </LanguageProvider>
        );
    })
    it('should receive text props', () => {
        const translation = <TranslationThemedText text={text} />
        expect(translation.props.text).toEqual(text);
    });

    it('should render correctly', () => {
        const translation = language.result.current.translate(text);
        expect(wrapper.getAllByText(translation)).toHaveLength(1);
    });


    it('should render correctly with the selected language', async () => {
        
        const items = language.result.current.availableLanguages;
        const selectedValue = items[1].value;
        
        // set the language from the LanguageHook
        language.result.current.setLanguage(LANGUAGE.NL);

        language.waitForNextUpdate();

        await act(async() => {});
        
        // set the selected language via rendered
        await fireEvent(wrapper.getByTestId(pickerTestId), 'onValueChange', selectedValue);
        
        const translation = language.result.current.translate(text);
        
        expect(wrapper.getAllByText(translation)).toHaveLength(1);
    });
});