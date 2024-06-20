/**
 * Vulcanoes Page
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */

import React from 'react';
import { View } from 'react-native';
import { InfoCard } from '@components/InfoCard';

export function VulcanoesPageScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <InfoCard
                title={'Vulcanoes'}
                subtitle={'Volcanic conditions can change at any time.'}
                imageSource={require('../assets/images/vulcano-banner.jpg')}
            />
        </View>
    );
}
