/**
 * Post card for info
 */

import React, { useState } from 'react';
import { Dimensions, LayoutChangeEvent, View } from 'react-native';
import { Card, TouchableRipple } from 'react-native-paper';
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
    const [coverHeight, setCoverHeight] = useState<number | undefined>();

    /**
     * Function to measure the height of the image at render time,
     * And save it to the state
     */
    const onCoverLayout = (event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout;
        setCoverHeight(height);
    };

    return (
        <View style={styles.wrapper}>
            <Card>
                <Card.Cover
                    source={props.imageSource}
                    style={styles.banner}
                    resizeMode={'cover'}
                    onLayout={onCoverLayout}
                />
                <Card.Title
                    titleVariant="headlineSmall"
                    title={
                        <Label
                            color={COLORS.teal}
                            bold
                        >
                            {props.title}
                        </Label>
                    }
                    style={styles.spaced}
                />
                <Card.Content
                    style={[
                        styles.restricted,
                        coverHeight ? { height: coverHeight / 3 } : {},
                    ]}
                >
                    <Label variant="titleMedium">{props.subtitle}</Label>
                </Card.Content>
                <Card.Actions>
                    <TouchableRipple
                        style={styles.buttonWrapper}
                        rippleColor={COLORS.touchMask}
                        onPress={
                            // TODO: In future versions, do something useful when clicking this arrow button
                            () => console.log('ok')
                        }
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
    spaced: {
        marginTop: '15@vs',
    },
    banner: {
        width: (Dimensions.get('window').width * 38) / 45,
    },
    restricted: {
        maxWidth: (Dimensions.get('window').width * 38) / 45,
    },
});
