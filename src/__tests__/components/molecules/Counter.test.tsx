import { renderHook } from '@testing-library/react-hooks';
import { act, fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { LANGUAGE } from 'common';
import { pickerTestId } from 'components/atoms/Picker';
import Counter, { counterHeader } from 'components/molecules/Counter';
import LanguagePicker from 'components/molecules/LanguagePicker';
import { LanguageProvider, useLanguage, useLanguageHook } from 'contexts/Language';
import { ThemeProvider } from 'contexts/Theme';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'states/store';

describe('Counter render', () => {
    let wrapper: RenderAPI;

    const language = renderHook(() => useLanguage());

    beforeEach(() => {
        wrapper = render(
            <>
                <LanguageProvider>
                    <Provider store={store}>
                        <Counter />
                        <LanguagePicker />
                    </Provider>
                </LanguageProvider>
            </>
        );
    });

    it('should display Counter component', async () => {
        expect(wrapper.getAllByText(language.result.current.translate(counterHeader))).toHaveLength(1)
    });
    it('should display Button + component', () => {
        expect(wrapper.getAllByText("+")).toHaveLength(1)
    });
    it('should display Button - component', () => {
        expect(wrapper.getAllByText("-")).toHaveLength(1)
    });
    it('should display 0 as default count value', () => {
        expect(wrapper.getAllByText("Counter: 0")).toHaveLength(1)
    });
});

describe('Counter interaction', () => {
    let wrapper: RenderAPI;

    beforeEach(() => {
        wrapper = render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    });

    it('should increment number of count when Button + onPress', async () => {
        fireEvent.press(wrapper.getByText("+"))
        await act(async () => { });
        expect(wrapper.getAllByText("Counter: 1")).toHaveLength(1)
    });

    it('should decrement number of count when Button - onPress', async () => {
        fireEvent.press(wrapper.getByText("-"))
        await act(async () => { });
        expect(wrapper.getAllByText("Counter: 0")).toHaveLength(1)
    });

});