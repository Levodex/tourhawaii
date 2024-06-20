/**
 * Contact card for Travel Guides
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */

import React from 'react';
import { View, Image } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

import { Label } from './Label';
import { COLORS } from '@theme/colors';
import BookTripButton from './BookTripButton';

/**
 * Contact card props
 * Currently all images loaded are local assets
 * Future versions can change this to remote URLs
 */
export type ContactCardProps = {
    avatarImageSource: number; // TODO: Replace this with internet sourced images
    fullName: string;
    subtitle: string;
    onClickContact?: () => void; // TODO: In future versions, add functionality when the contact button is clicked
};

/**
 * Component to show Contact info cards
 * This will be used on @see LandingPageScreen Travel guide
 */
export function ContactCard(props: ContactCardProps) {
    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.contentsContainer}>
                    <Label
                        variant="headlineSmall"
                        color={COLORS.teal}
                        bold
                    >
                        {props.fullName}
                    </Label>
                    <Label variant="titleMedium">{props.subtitle}</Label>
                    <View style={styles.safeButtonWrapper}>
                        <TouchableRipple
                            rippleColor={COLORS.touchMask}
                            style={styles.buttonContainer}
                            onPress={props.onClickContact}
                        >
                            <View style={styles.button}>
                                <Label
                                    variant="titleMedium"
                                    color={COLORS.teal}
                                    bold
                                >
                                    Contact
                                </Label>
                            </View>
                        </TouchableRipple>
                    </View>
                </View>
                <View style={styles.avatarContainer}>
                    <Image
                        source={props.avatarImageSource}
                        style={styles.avatarImage}
                    />
                </View>
            </View>
            <>
                <BookTripButton />
            </>
        </>
    );
}

const styles = ScaledSheet.create({
    wrapper: {
        padding: '10@s',
        paddingHorizontal: '35@s',
        gap: '5@s',
        flexDirection: 'row',
    },
    contentsContainer: {
        flexGrow: 1,
        gap: '5@s',
    },
    avatarContainer: {
        alignItems: 'center',
        borderRadius: 74,
    },
    avatarImage: {
        width: 74,
        height: 74,
        borderRadius: 74,
    },
    safeButtonWrapper: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: '20@vs',
    },
    buttonContainer: {
        borderRadius: '7.5@s',
    },
    button: {
        borderColor: COLORS.teal,
        borderWidth: 1,
        borderRadius: '7.5@s',
        padding: '7.5@s',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
