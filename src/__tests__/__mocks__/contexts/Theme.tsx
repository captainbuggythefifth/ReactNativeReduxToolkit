import React from 'react';
import { Text } from 'react-native';
import { ThemeContext, useTheme, ThemeProvider } from "../../../contexts/Theme"
import Button from 'components/atoms/Button';
import { render } from '@testing-library/react-native';

export const mockCustomThemeConsumerRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <ThemeContext.Provider {...providerProps}>{ui}</ThemeContext.Provider>,
    renderOptions
  )
}

export const mockCustomThemeProviderRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <ThemeProvider>{ui}</ThemeProvider>
  )
}

export const MockThemeConsumer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <>
          <Text>
            Theme: {theme}
          </Text>

          <Button
            title={"TOGGLE THEME"}
            onPress={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </>
      )}
    </ThemeContext.Consumer>
  )
}

export const MockTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Text>
        {theme}
      </Text>

      <Button
        title={"TOGGLE THEME"}
        onPress={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </>
  )
}