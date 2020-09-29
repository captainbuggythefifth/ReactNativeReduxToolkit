import React from 'react';
import { useLanguage } from 'contexts/Language';
import ThemedText from './ThemedText';

interface ITranslationProps {
    text: string | number,
    preTextOnly?: string | number,
    postTextOnly?: string | number
}

const TranslationThemedText = ({text, preTextOnly = "", postTextOnly = ""}: ITranslationProps) => {
    const { translate } = useLanguage();
    const translatedText = translate(text);

    return <ThemedText>{`${preTextOnly}${translatedText}${postTextOnly}`}</ThemedText>;
}

export default TranslationThemedText