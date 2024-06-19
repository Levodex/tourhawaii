/**
 * Hula Page
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */

import React from 'react';
import { View } from 'react-native';
import { InfoCard } from '@components/InfoCard';

export function HulaPageScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <InfoCard
                title={'Hula'}
                subtitle={'Try it yourself.'}
                imageSource={require('../assets/images/hula-banner.jpg')}
            />
        </View>
    );
}
