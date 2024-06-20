/**
 * Surfing Page
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */

import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, View } from 'react-native';

import { TouchableRipple } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

import * as CONSTANTS from '@constants';
import { COLORS } from '@theme/colors';
import { AlohaBanner } from '@assets/svg/AlohaBanner';
import { Label } from '@components/Label';
import SurfingPageGraphics from '@assets/svg/labels/SurfingLabel';
import { ContactCard } from '@components/ContactCard';

import * as __MOCKS__ from '../../__mocks__/mockData1';

interface FlatListRendererForTopSpots {
    item: __MOCKS__.SurfingPageTopSpot;
    index: number;
}

/**
 * Function to render top spots within flatlist
 */
const renderTopSpots = ({ item, index }: FlatListRendererForTopSpots) => (
    <TouchableRipple
        key={index}
        style={styles.topSpotContainer}
        rippleColor={COLORS.touchMask}
        onPress={() => {
            // TODO: In future versions, do something useful when clicking this Top Spot
            console.log(`Pressed Top Spot #${index + 1} ${item.name}`);
        }}
    >
        <View style={styles.singleTopSpot}>
            <View style={styles.topSpotTitleColumn}>
                <Label
                    variant="titleMedium"
                    bold
                    color={COLORS.teal}
                >
                    {`${index + 1}. ` + item.name}
                </Label>
            </View>
            <Image
                style={styles.topSpotImage}
                source={item.image}
            />
        </View>
    </TouchableRipple>
);

/**
 * Surfing Page Screen
 */
export function SurfingPageScreen() {
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
                    source={require('../assets/images/surfing-banner.jpg')}
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
                        <SurfingPageGraphics />
                    </View>
                }
            </View>
            <Label
                variant="titleMedium"
                style={[styles.body, styles.padded, styles.bodyText]}
            >
                Hawaii is the capital of modern surfing. This group of Pacific
                islands gets swell from all directions, so there are plenty of
                pristine surf spots for all.
            </Label>
            <Label
                variant="titleLarge"
                style={[styles.padded, { backgroundColor: COLORS.yellow }]}
                bold
            >
                Top spots
            </Label>
            <FlatList
                data={__MOCKS__.TOP_SPOTS}
                renderItem={renderTopSpots}
                scrollEnabled={false} // To prevent nested VirtualizedLists problem
            />
            <Label
                variant="titleLarge"
                style={[styles.spaced, { backgroundColor: COLORS.yellow }]}
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
                />
            }
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
        maxHeight: CONSTANTS.MAX_SURFING_SPLASH_IMAGE_HEIGHT,
    },
    splashImage: {
        width: '100%',
        maxHeight: CONSTANTS.MAX_SURFING_SPLASH_IMAGE_HEIGHT,
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
    spaced: {
        marginTop: '35@vs',
        padding: '15@s',
    },
    body: {
        marginTop: '15@vs',
    },
    topSpotContainer: {
        flexGrow: 1,
        paddingHorizontal: '10@s',
        paddingLeft: '35@s',
        paddingVertical: '5@s',
        flexDirection: 'row',
        alignItems: 'center',
    },
    singleTopSpot: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    topSpotTitleColumn: {
        flexGrow: 1,
    },
    topSpotImage: {
        width:
            CONSTANTS.SPLASH_IMAGE_ASPECT_RATIO *
            0.5 *
            Dimensions.get('window').width,
        aspectRatio: 2,
    },
});
