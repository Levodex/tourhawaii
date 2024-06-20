/**
 * Constant declarations for the App
 * Every constant exported would be a named export
 *
 * Environment variables and constants should use the .env file instead
 *
 * By standard naming convention, all constants should follow SNAKE_CASE
 *
 */
import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

// Bottom tab navigator related
export const BOTTOM_TAB_NAVIGATOR_ICON_SIZE = scale(16);

// Landing page splash image aspect ratio
export const SPLASH_IMAGE_ASPECT_RATIO = 0.666;

// Max Splash image height on landing page
export const MAX_SPLASH_IMAGE_HEIGHT =
    Dimensions.get('window').height * SPLASH_IMAGE_ASPECT_RATIO;

// Max Splash image height on Surfing page
export const MAX_SURFING_SPLASH_IMAGE_HEIGHT =
    Dimensions.get('window').width * SPLASH_IMAGE_ASPECT_RATIO;
