/**
 * Landing page screen with splash screen, highlights reel, and categories
 *
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */

import React from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';

import { TouchableRipple } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

import * as CONSTANTS from '@constants';
import { COLORS } from '@theme/colors';
import { AlohaBanner } from '@assets/svg/AlohaBanner';
import { Label } from '@components/Label';
import { HighlightsReel } from '@containers/HighlightsReel';
import BookTripButton from '@components/BookTripButton';
import WelcomePageGraphics from '@assets/svg/labels/WelcomeToHawaiiLabel';
import { RightArrow } from '@assets/svg/buttons/RightArrow';
import { ContactCard } from '@components/ContactCard';

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
        <TouchableRipple
            rippleColor={COLORS.touchMask}
            onPress={() => {
                // TODO: In future versions, do something useful when clicking this arrow
                console.log(`Pressed arrow #${index + 1}`);
            }}
        >
            <RightArrow />
        </TouchableRipple>
    </View>
);

/**
 * Landing Page Screen
 */
export function LandingPageScreen() {
    return (
        <>
            <View style={styles.floatingBottomButtonContainer}>
                <BookTripButton />
            </View>
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
                    style={[styles.highlightsLabel, styles.padded]}
                    bold
                >
                    Highlights
                </Label>
                <HighlightsReel />
                <Label
                    variant="titleLarge"
                    style={[styles.padded, { backgroundColor: COLORS.yellow }]}
                    bold
                >
                    Categories
                </Label>
                <FlatList
                    data={__MOCKS__.CATEGORIES}
                    renderItem={renderCategories}
                    scrollEnabled={false} // To prevent nested VirtualizedLists problem
                />
                <Label
                    variant="titleLarge"
                    style={[styles.padded, { backgroundColor: COLORS.yellow }]}
                    bold
                >
                    Travel Guide
                </Label>
                {
                    // TODO: In future versions, load data via API calls and use that data
                    <ContactCard
                        avatarImageSource={require('../assets/images/guide-avatar.jpg')}
                        fullName="Hadwin Malone"
                        subtitle="Guide since 2012"
                        onClickContact={
                            // TODO: In future versions, do something useful when clicking this arrow button
                            () => console.log('ok')
                        }
                        ignoreButton
                    />
                }
            </ScrollView>
        </>
    );
}

const styles = ScaledSheet.create({
    wholePageContainer: {
        flex: 1,
    },
    scrollWrapper: {
        gap: '4@vs',
    },
    floatingBottomButtonContainer: {
        position: 'absolute',
        zIndex: +5,
        bottom: '-10@vs',
        alignSelf: 'center',
        width: '100%',
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
    highlightsLabel: {
        marginTop: '15@vs',
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
});
