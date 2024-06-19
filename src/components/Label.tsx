/**
 * Label component
 *
 * Please @see README.md on the fonts folder before building
 * The license for the font used is on @see LICENSES.md, on the fonts folder
 */

import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { Text } from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';

import { COLORS } from '@theme/colors';

/**
 * Label prop type
 */
interface LabelProps {
    color?: string;
    variant?: VariantProp<never>;
    children: React.ReactNode | string;
    style?: StyleProp<TextStyle>;
}

/**
 * Label component
 * Wraps texts with the themed font
 *
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */
export function Label({ color, variant, children, style }: LabelProps) {
    return (
        <Text
            variant={variant}
            style={[
                {
                    fontFamily: 'CallingCode-Regular',
                    color: color ?? COLORS.black,
                },
                style ?? {},
            ]}
        >
            {children}
        </Text>
    );
}
