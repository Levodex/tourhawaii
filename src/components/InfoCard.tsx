/**
 * Post card for info
 */

import React from 'react';
import { Dimensions, View } from 'react-native';
import { Text, Card, TouchableRipple } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

import { Label } from './Label';
import { RightArrow } from '@assets/svg/buttons/RightArrow';
import { COLORS } from '@theme/colors';

/**
 * Info card props
 * Currently all images loaded are local assets
 * Future versions can change this to remote URLs
 */
export type InfoCardProps = {
    imageSource: number; // TODO: Replace this with internet sourced images
    title: string;
    subtitle: string;
};

/**
 * Component to show information cards
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 *
 */
export function InfoCard(props: InfoCardProps) {
    return (
        <View style={styles.wrapper}>
            <Card>
                <Card.Cover
                    source={props.imageSource}
                    style={styles.banner}
                    resizeMode={'cover'}
                />
                <Card.Title
                    titleVariant="headlineSmall"
                    title={<Label color={COLORS.teal}>{props.title}</Label>}
                />
                <Card.Content style={styles.restricted}>
                    <Label variant="titleMedium">{props.subtitle}</Label>
                </Card.Content>
                <Card.Actions>
                    <TouchableRipple
                        style={styles.buttonWrapper}
                        rippleColor={COLORS.touchMask}
                        onPress={() => console.log('ok')}
                    >
                        <RightArrow />
                    </TouchableRipple>
                </Card.Actions>
            </Card>
        </View>
    );
}

const styles = ScaledSheet.create({
    wrapper: {
        margin: '1@s',
    },
    buttonWrapper: {
        borderRadius: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        width: (Dimensions.get('window').width * 38) / 45,
    },
    restricted: {
        maxWidth: (Dimensions.get('window').width * 38) / 45,
    },
    wrappedText: {
        flexWrap: 'wrap',
    },
});
