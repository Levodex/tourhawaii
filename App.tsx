/**
 * Entry point App.tsx for the app
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { BottomTabNavigator } from '@navigation/parts';

/**
 * Main App component
 */
const App = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
};

export default App;
