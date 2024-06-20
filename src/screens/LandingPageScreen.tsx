/**
 * Landing page screen with splash screen, highlights reel, and categories
 *
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */

import React from 'react';
import { Dimensions, Image, ScrollView, View } from 'react-native';

import { Text } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

import { AlohaBanner } from '@assets/AlohaBanner';
import { Label } from '@components/Label';
import { HighlightsReel } from '@containers/HighlightsReel';
import WelcomePageGraphics from '@assets/svg/WelcomeToHawaiiLabel';
import * as CONSTANTS from '@constants';

/**
 * Landing Page Screen
 */
export function LandingPageScreen() {
    return (
        <ScrollView
            style={styles.wholePageContainer}
            contentContainerStyle={styles.scrollWrapper}
            persistentScrollbar={true}
        >
            <View style={styles.bannerWrapper}>
                <AlohaBanner />
            </View>
            <View style={styles.imageAndGraphicsOverlayWrapper}>
                <Image
                    source={require('../assets/images/welcome-splash.jpg')}
                    resizeMode={'cover'}
                    style={styles.splashImage}
                />
                {
                    /**
                     * Graphics overlay to show
                     *     "welcome to hawaii"
                     * On top of the image
                     */
                    <View style={styles.graphicsOverlay}>
                        <WelcomePageGraphics />
                    </View>
                }
            </View>
            <Label variant="titleLarge" style={styles.padded}>Highlights</Label>
            <HighlightsReel />
            <Label variant="titleLarge" style={styles.padded}>Categories</Label>
        </ScrollView>
    );
}

const styles = ScaledSheet.create({
    wholePageContainer: {
        flex: 1,
    },
    scrollWrapper: {
        gap: '4@vs',
    },
    imageAndGraphicsOverlayWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: CONSTANTS.MAX_SPLASH_IMAGE_HEIGHT,
    },
    splashImage: {
        width: '100%',
        maxHeight: CONSTANTS.MAX_SPLASH_IMAGE_HEIGHT,
    },
    bannerWrapper: {
        padding: '20@s',
        width: '100%',
        alignItems: 'center',
    },
    graphicsOverlay: {
        zIndex: +3,
        position: 'absolute',
    },
    padded: {
        padding: '15@s',
    },
});
