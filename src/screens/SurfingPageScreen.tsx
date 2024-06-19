/**
 * Surfing Page
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */

import React from 'react';
import { View } from 'react-native';
import { InfoCard } from '@components/InfoCard';

export function SurfingPageScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <InfoCard
                    title={'Surfing'}
                    subtitle={'Best Hawaiian islands for surfing.'}
                    imageSource={require('../assets/images/surfing-banner.jpg')}
                />
        </View>
    );
}
