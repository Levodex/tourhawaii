/**
 * Book a trip for landing and surfing pages
 */

import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '@theme/colors';
import { Label } from './Label';

/**
 * Book a trip button
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */
export default function BookTripButton() {
    return (
        <View style={styles.safeButtonWrapper}>
            <Button
                mode="contained"
                buttonColor={COLORS.teal}
                rippleColor={COLORS.touchMask}
                style={styles.button}
                onPress={() => {
                    // TODO: In future versions, associate an action with this
                    console.log('clicked booking button');
                }}
            >
                <Label
                    variant="titleMedium"
                    color={COLORS.white}
                    bold
                >
                    Book a trip
                </Label>
            </Button>
        </View>
    );
}

const styles = ScaledSheet.create({
    safeButtonWrapper: {
        padding: '20@s',
    },
    button: {
        borderRadius: '7.5@s',
    },
});
