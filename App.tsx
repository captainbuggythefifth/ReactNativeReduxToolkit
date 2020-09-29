import React from 'react';
import { Provider } from 'react-redux'
import store from 'states/store';
import Counter from 'components/molecules/Counter';
import { ThemeProvider } from 'contexts/Theme';
import SwitchTheme from 'components/molecules/SwitchTheme';
import MainApp from 'MainApp';
import { LanguageProvider } from 'contexts/Language';


declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Provider store={store}>
          <MainApp />
        </Provider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
