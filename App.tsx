import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Router from './src/router';
import { ChecklistProvider } from './src/app/hooks/CheckListContext';
import { ThemeProvider } from 'styled-components';
import theme from './src/app/styles/theme';

export default function App(): JSX.Element { 
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style='dark' backgroundColor='transparent' translucent/>
        <ChecklistProvider>
          <Router />
        </ChecklistProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
