/**
 * Landing page screen with splash screen, highlights reel, and categories
 *
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */

import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, View } from 'react-native';

import { Menu } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

import * as CONSTANTS from '@constants';
import { COLORS } from '@theme/colors';
import { AlohaBanner } from '@assets/svg/AlohaBanner';
import { Label } from '@components/Label';
import { HighlightsReel } from '@containers/HighlightsReel';
import WelcomePageGraphics from '@assets/svg/WelcomeToHawaiiLabel';
import { RightArrow } from '@assets/svg/buttons/RightArrow';

import * as __MOCKS__ from '../../__mocks__/mockData1';

interface FlatListRendererForCategories {
    item: __MOCKS__.LandingPageCategory;
    index: number;
}

/**
 * Function to render categories within flatlist
 */
const renderCategories = ({ item, index }: FlatListRendererForCategories) => (
    <View
        key={index}
        style={styles.categoriesContainer}
    >
        <Label
            variant="titleMedium"
            style={styles.categoryTitle}
        >
            {item.title}
        </Label>
        <>
            <RightArrow />
        </>
    </View>
);

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
            <Label
                variant="titleLarge"
                style={styles.padded}
            >
                Highlights
            </Label>
            <HighlightsReel />
            <Label
                variant="titleLarge"
                style={[styles.padded, { backgroundColor: COLORS.yellow }]}
            >
                Categories
            </Label>
            <FlatList
                data={__MOCKS__.CATEGORIES}
                renderItem={renderCategories}
                scrollEnabled={false} // To prevent nested VirtualizedLists problem
            />
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
    categoriesContainer: {
        flexGrow: 1,
        paddingHorizontal: '35@s',
        paddingVertical: '5@s',
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryTitle: {
        flexGrow: 1,
    },
    singleCategory: {
        width: Dimensions.get('window').width,
    },
    arrowWrapper: {},
});
