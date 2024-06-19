/**
 * Highlights reel for the highlights section
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { InfoCard } from '@components/InfoCard';

/**
 * Main component for Highlights reel
 * This reel scrolls horizontally with its child presentation components
 *
 * Business logic should be placed using hooks/RxJs, to load/show data via API calls here
 * If data is instead loaded using Redux, then useSelector hooks should be placed here
 *
 * TODO: In future versions, add functionality to load data dynamically with API calls from Axios
 */
export function HighlightsReel() {
    return (
        <>
            <ScrollView
                horizontal
                persistentScrollbar={false}
                style={styles.scroller}
                contentContainerStyle={styles.wrapper}
            >
                <InfoCard
                    title={'Surfing'}
                    subtitle={'Best Hawaiian islands for surfing.'}
                    imageSource={require('../assets/images/surfing-banner.jpg')}
                />
                <InfoCard
                    title={'Hula'}
                    subtitle={'Try it yourself.'}
                    imageSource={require('../assets/images/hula-banner.jpg')}
                />
                <InfoCard
                    title={'Vulcanoes'}
                    subtitle={'Volcanic conditions can change at any time.'}
                    imageSource={require('../assets/images/vulcano-banner.jpg')}
                />
            </ScrollView>
        </>
    );
}

const styles = ScaledSheet.create({
    scroller: {
        padding: '2@s',
    },
    wrapper: {
        gap: '4@s',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
});
