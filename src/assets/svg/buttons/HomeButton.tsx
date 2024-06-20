/**
 * HomeButton for the BottomTab Navigator
 */

import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

/**
 * Home Button for Bottom Tab Navigator
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */
export function HomeButton(props: SvgProps) {
    return (
        <Svg
            width="90"
            height="72"
            viewBox="0 0 90 72"
            fill={'#ffffff'}
            {...props}
        >
            <Rect
                width="90"
                height="72"
                fill="#ffffff"
            />
            <Path
                d="M39 26.1624C39 25.8444 39.1512 25.5454 39.4073 25.357L44.4073 21.6777C44.7599 21.4183 45.2401 21.4183 45.5927 21.6777L50.5927 25.357C50.8488 25.5454 51 25.8444 51 26.1624V34C51 34.5523 50.5523 35 50 35H40C39.4477 35 39 34.5523 39 34V26.1624Z"
                stroke="#001A1A"
                stroke-width="2"
            />
            <Path
                d="M36.8878 53.08H35.1278V56H33.6178V49.02H35.1278V51.85H36.8878V49.02H38.3978V56H36.8878V53.08ZM42.0039 56.12C41.6039 56.12 41.2439 56.06 40.9239 55.94C40.6039 55.8133 40.3306 55.6333 40.1039 55.4C39.8839 55.1667 39.7139 54.8833 39.5939 54.55C39.4739 54.2167 39.4139 53.84 39.4139 53.42C39.4139 53 39.4739 52.6233 39.5939 52.29C39.7139 51.9567 39.8839 51.6733 40.1039 51.44C40.3306 51.2067 40.6039 51.03 40.9239 50.91C41.2439 50.7833 41.6039 50.72 42.0039 50.72C42.4039 50.72 42.7639 50.7833 43.0839 50.91C43.4039 51.03 43.6739 51.2067 43.8939 51.44C44.1206 51.6733 44.2939 51.9567 44.4139 52.29C44.5339 52.6233 44.5939 53 44.5939 53.42C44.5939 53.84 44.5339 54.2167 44.4139 54.55C44.2939 54.8833 44.1206 55.1667 43.8939 55.4C43.6739 55.6333 43.4039 55.8133 43.0839 55.94C42.7639 56.06 42.4039 56.12 42.0039 56.12ZM42.0039 55.02C42.3372 55.02 42.5972 54.9167 42.7839 54.71C42.9706 54.5033 43.0639 54.21 43.0639 53.83V53.01C43.0639 52.63 42.9706 52.3367 42.7839 52.13C42.5972 51.9233 42.3372 51.82 42.0039 51.82C41.6706 51.82 41.4106 51.9233 41.2239 52.13C41.0372 52.3367 40.9439 52.63 40.9439 53.01V53.83C40.9439 54.21 41.0372 54.5033 41.2239 54.71C41.4106 54.9167 41.6706 55.02 42.0039 55.02ZM45.3 56V50.84H46.49V51.6H46.56C46.64 51.36 46.7533 51.1533 46.9 50.98C47.0533 50.8067 47.2667 50.72 47.54 50.72C48.04 50.72 48.3467 51.0133 48.46 51.6H48.52C48.56 51.48 48.61 51.3667 48.67 51.26C48.73 51.1533 48.8033 51.06 48.89 50.98C48.9767 50.9 49.08 50.8367 49.2 50.79C49.32 50.7433 49.46 50.72 49.62 50.72C50.34 50.72 50.7 51.25 50.7 52.31V56H49.51V52.46C49.51 52.22 49.4667 52.0533 49.38 51.96C49.3 51.86 49.1933 51.81 49.06 51.81C48.9333 51.81 48.8233 51.8533 48.73 51.94C48.6433 52.02 48.6 52.1467 48.6 52.32V56H47.4V52.46C47.4 52.22 47.36 52.0533 47.28 51.96C47.2067 51.86 47.1033 51.81 46.97 51.81C46.8367 51.81 46.7233 51.8533 46.63 51.94C46.5367 52.02 46.49 52.1467 46.49 52.32V56H45.3ZM54.1361 56.12C53.2694 56.12 52.6128 55.88 52.1661 55.4C51.7194 54.92 51.4961 54.2667 51.4961 53.44C51.4961 53.02 51.5528 52.6433 51.6661 52.31C51.7861 51.97 51.9528 51.6833 52.1661 51.45C52.3861 51.21 52.6494 51.03 52.9561 50.91C53.2694 50.7833 53.6194 50.72 54.0061 50.72C54.3928 50.72 54.7394 50.7833 55.0461 50.91C55.3528 51.03 55.6128 51.2033 55.8261 51.43C56.0394 51.6567 56.2028 51.9333 56.3161 52.26C56.4361 52.58 56.4961 52.94 56.4961 53.34V53.78H52.9661V53.87C52.9661 54.2033 53.0694 54.4733 53.2761 54.68C53.4828 54.88 53.7861 54.98 54.1861 54.98C54.4928 54.98 54.7561 54.9233 54.9761 54.81C55.1961 54.69 55.3861 54.5333 55.5461 54.34L56.3461 55.21C56.1461 55.4567 55.8661 55.67 55.5061 55.85C55.1461 56.03 54.6894 56.12 54.1361 56.12ZM54.0161 51.78C53.6961 51.78 53.4394 51.88 53.2461 52.08C53.0594 52.2733 52.9661 52.5367 52.9661 52.87V52.95H55.0461V52.87C55.0461 52.53 54.9528 52.2633 54.7661 52.07C54.5861 51.8767 54.3361 51.78 54.0161 51.78Z"
                fill="#001A1A"
            />
        </Svg>
    );
}
