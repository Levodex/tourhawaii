/**
 * UI Parts used with app navigation
 *
 * This file has multiple named exports and no default exports
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { Text, BottomNavigation } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { SvgProps } from 'react-native-svg';

import Tab from './index';
import { BOTTOM_TAB_NAVIGATOR_ICON_SIZE } from '@constants';
import { COLORS } from '@theme/colors';

import { HomeButton } from '@assets/svg/buttons/HomeButton';
import { SurfingButton } from '@assets/svg/buttons/SurfingButton';
import { HulaButton } from '@assets/svg/buttons/HulaButton';
import { VulcanoButton } from '@assets/svg/buttons/VulcanoButton';

import { LandingPageScreen } from '@screens/LandingPageScreen';
import { SurfingPageScreen } from '@screens/SurfingPageScreen';
import { HulaPageScreen } from '@screens/HulaPageScreen';
import { VulcanoesPageScreen } from '@screens/VulcanoesPageScreen';

/**
 * Bottom tab navigation UI component to switch between Screens
 */
export function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(
                                    route.name,
                                    route.params,
                                ),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return (
                                <View
                                    style={
                                        focused ? styles.focusedHighlight : {}
                                    }
                                >
                                    {options.tabBarIcon({
                                        focused,
                                        color: focused ? COLORS.teal : color,
                                        size: BOTTOM_TAB_NAVIGATOR_ICON_SIZE,
                                    })}
                                </View>
                            );
                        }

                        return null;
                    }}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={LandingPageScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: HomeButton,
                }}
            />
            <Tab.Screen
                name="Surfing"
                component={SurfingPageScreen}
                options={{
                    tabBarLabel: 'Surfing',
                    tabBarIcon: SurfingButton,
                }}
            />
            <Tab.Screen
                name="Hula"
                component={HulaPageScreen}
                options={{
                    tabBarLabel: 'Hula',
                    tabBarIcon: HulaButton,
                }}
            />
            <Tab.Screen
                name="Vulcano"
                component={VulcanoesPageScreen}
                options={{
                    tabBarLabel: 'Vulcano',
                    tabBarIcon: VulcanoButton,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = ScaledSheet.create({
    focusedHighlight: {
        marginTop: -4,
        borderTopColor: COLORS.teal,
        borderTopWidth: 4,
    },
});
