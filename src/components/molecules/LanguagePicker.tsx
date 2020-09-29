import React, { ReactText } from 'react';
import ThemedPicker from './ThemedPicker';
import { useLanguage } from 'contexts/Language';

const LanguagePicker = () => {

    const { language, availableLanguages, setLanguage } = useLanguage();
    const items = availableLanguages;

    return (
        <ThemedPicker
            items={items}
            onValueChange={(itemValue: ReactText, itemIndex: number) => {
                if (typeof itemValue === "string") {
                    setLanguage(itemValue);
                }
            }}
            selectedValue={language}
        />
    )
};

export default LanguagePicker