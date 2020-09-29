import React from 'react';
import { Text } from 'react-native';
import { LanguageContext, useLanguage, LanguageProvider } from "../../../contexts/Language"
import Button from 'components/atoms/Button';
import { render } from '@testing-library/react-native';
import { LANGUAGE } from 'common';

export const mockCustomLanguageConsumerRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <LanguageContext.Provider {...providerProps}>{ui}</LanguageContext.Provider>,
    renderOptions
  )
}

export const mockCustomLanguageProviderRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <LanguageProvider>{ui}</LanguageProvider>
  )
}

export const MockLanguageConsumer = () => {
  return (
    <LanguageContext.Consumer>
      {({ language, setLanguage }) => (
        <>
          <Text>
            Language: {language}
          </Text>

          <Button
            title={"TOGGLE LANGUAGE"}
            onPress={() => setLanguage(language === LANGUAGE.EN ? LANGUAGE.NL : LANGUAGE.EN)}
          />
        </>
      )}
    </LanguageContext.Consumer>
  )
}

export const MockLanguage = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <Text>
        {language}
      </Text>

      <Button
        title={"TOGGLE LANGUAGE"}
        onPress={() => setLanguage(language === LANGUAGE.EN ? LANGUAGE.NL : LANGUAGE.EN)}
      />
    </>
  )
}