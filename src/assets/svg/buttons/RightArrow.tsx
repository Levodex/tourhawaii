/**
 * Right arrow button
 */

import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg';

/**
 * Right arrow button for Information card
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */
export function RightArrow() {
    return (
        <View style={styles.wrapper}>
            <Svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
            >
                <Path
                    d="M20 28L18.575 26.6L24.175 21H12V19H24.175L18.575 13.4L20 12L28 20L20 28Z"
                    fill="#008080"
                />
            </Svg>
        </View>
    );
}

const styles = ScaledSheet.create({
    wrapper: {
        width: 42,
        height: 42,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
