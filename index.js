/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import App from './App';
import { name as appName } from './app.json';

export default function ThemedApp() {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => ThemedApp);
