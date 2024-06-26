/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';

import App from './App';
import { name as appName } from './app.json';

export default function ThemedApp() {
    return (
        <PaperProvider theme={MD3LightTheme}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => ThemedApp);
