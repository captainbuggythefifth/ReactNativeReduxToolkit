import { act, renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { LANGUAGE, THEME } from 'common';
import Picker, { pickerTestId } from 'components/atoms/Picker';
import LanguagePicker from 'components/molecules/LanguagePicker';
import { LanguageProvider, useLanguage, useLanguageHook } from 'contexts/Language';
import React from 'react';

describe('LanguagePicker render', () => {
    let wrapper: RenderAPI;
    const onValueChange = jest.fn();

    const { result, waitForNextUpdate } = renderHook(() => useLanguage());

    const items = result.current.availableLanguages;

    beforeEach(() => {
        wrapper = render(<LanguagePicker />)
    })
    it('should render Picker component', () => {
        const itemToCheck = {
            ...items[0],
            textColor: THEME.nativeColors[THEME.DEFAULT]
        };

        const foundItem = wrapper.getByTestId(pickerTestId).props.items.find((item: any) => item.label === itemToCheck.label);

        expect(foundItem).toEqual(itemToCheck);
    });
    it('should render the items props', () => {
        const itemsExpectedFromPicker = items.map((item: any) => {
            return {
                ...item,
                textColor: THEME.nativeColors[THEME.DEFAULT]
            }
        })
        wrapper = render(<LanguagePicker />);
        expect(wrapper.getByTestId(pickerTestId).props.items).toEqual(itemsExpectedFromPicker);
    });
});

describe('LanguagePicker interaction', () => {
    let wrapper: RenderAPI;
    const onValueChange = jest.fn();

    const { result, waitForNextUpdate } = renderHook(() => useLanguageHook());

    const items = result.current.availableLanguages;

    const selectedValue = items[1].value;

    beforeEach(() => {
        wrapper = render(
            <LanguageProvider>
                <LanguagePicker />
            </LanguageProvider>
        );
    });

    it('should able to pick from given selections', async () => {
        act(async () => {
            fireEvent(wrapper.getByTestId(pickerTestId), 'onValueChange', selectedValue); 
            
            expect(typeof selectedValue).toBe('string');
            expect(onValueChange).toHaveBeenCalledTimes(1);
        });
    });
})