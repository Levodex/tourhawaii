import * as React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

/**
 * Surfing page graphics
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */
export default function SurfingPageGraphics() {
    return (
        <Svg
            width="167"
            height="40"
            viewBox="0 0 167 40"
        >
            <Defs>
                <LinearGradient
                    id="grad"
                    x1={83}
                    y1={-6.65152}
                    x2={83}
                    y2={39.4394}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop
                        stopColor="#ffffff"
                        stopOpacity={0.5}
                    />
                    <Stop
                        offset={1}
                        stopColor="#ffffff"
                        stopOpacity={0.9}
                    />
                </LinearGradient>
            </Defs>
            <Path
                d="M10.6147 31.48C8.26802 31.48 6.22802 31.0933 4.49469 30.32C2.76135 29.5467 1.36135 28.4933 0.294688 27.16L3.77469 23.32C4.78802 24.44 5.89469 25.2667 7.09469 25.8C8.32135 26.3333 9.56135 26.6 10.8147 26.6C12.2547 26.6 13.348 26.28 14.0947 25.64C14.8414 25 15.2147 24.08 15.2147 22.88C15.2147 21.8933 14.9214 21.1467 14.3347 20.64C13.7747 20.1333 12.8147 19.7733 11.4547 19.56L8.53469 19.08C6.02802 18.6533 4.21469 17.7333 3.09469 16.32C1.97469 14.88 1.41469 13.1333 1.41469 11.08C1.41469 8.38667 2.29469 6.30667 4.05469 4.84C5.81469 3.34667 8.28135 2.6 11.4547 2.6C13.6147 2.6 15.4947 2.93333 17.0947 3.6C18.6947 4.26667 19.988 5.17333 20.9747 6.32L17.5747 10.12C16.828 9.29333 15.948 8.65333 14.9347 8.2C13.9214 7.72 12.7747 7.48 11.4947 7.48C8.80135 7.48 7.45469 8.58667 7.45469 10.8C7.45469 11.76 7.74802 12.48 8.33469 12.96C8.94802 13.44 9.93469 13.8 11.2947 14.04L14.2147 14.56C16.4814 14.96 18.228 15.8133 19.4547 17.12C20.6814 18.4267 21.2947 20.1867 21.2947 22.4C21.2947 23.7067 21.068 24.92 20.6147 26.04C20.1614 27.1333 19.4814 28.0933 18.5747 28.92C17.668 29.72 16.548 30.3467 15.2147 30.8C13.908 31.2533 12.3747 31.48 10.6147 31.48ZM38.5191 27.24H38.2791C37.8257 28.4133 37.1057 29.4133 36.1191 30.24C35.1591 31.0667 33.8524 31.48 32.1991 31.48C31.2124 31.48 30.3057 31.32 29.4791 31C28.6524 30.6533 27.9457 30.1467 27.3591 29.48C26.7724 28.8133 26.3057 28 25.9591 27.04C25.6391 26.08 25.4791 24.9733 25.4791 23.72V10.36H31.3991V22.92C31.3991 25.5867 32.5591 26.92 34.8791 26.92C35.3324 26.92 35.7724 26.8667 36.1991 26.76C36.6524 26.6267 37.0391 26.44 37.3591 26.2C37.7057 25.9333 37.9857 25.6133 38.1991 25.24C38.4124 24.8667 38.5191 24.4267 38.5191 23.92V10.36H44.4391V31H38.5191V27.24ZM49.9834 26.4H54.7434V14.96H49.9834V10.36H60.6634V16.2H60.9434C61.1301 15.4533 61.3834 14.7333 61.7034 14.04C62.0501 13.32 62.4768 12.6933 62.9834 12.16C63.5168 11.6 64.1568 11.16 64.9034 10.84C65.6501 10.52 66.5301 10.36 67.5434 10.36H69.5034V15.8H65.1034C63.6368 15.8 62.5301 16.24 61.7834 17.12C61.0368 17.9733 60.6634 19.0267 60.6634 20.28V26.4H67.4634V31H49.9834V26.4ZM73.8478 26.4H79.9278V14.96H73.4478V10.36H79.9278V7.36C79.9278 5.6 80.4345 4.17333 81.4478 3.08C82.4878 1.96 84.0878 1.4 86.2478 1.4H93.2478V6H85.8478V10.36H93.2478V14.96H85.8478V26.4H92.3278V31H73.8478V26.4ZM108.272 7.72C106.939 7.72 106.006 7.45333 105.472 6.92C104.966 6.36 104.712 5.69333 104.712 4.92V3.76C104.712 2.96 104.966 2.29333 105.472 1.76C106.006 1.22667 106.939 0.959998 108.272 0.959998C109.606 0.959998 110.526 1.22667 111.032 1.76C111.566 2.29333 111.832 2.96 111.832 3.76V4.92C111.832 5.69333 111.566 6.36 111.032 6.92C110.526 7.45333 109.606 7.72 108.272 7.72ZM98.7522 26.4H105.312V14.96H98.7522V10.36H111.232V26.4H117.312V31H98.7522V26.4ZM121.577 31V10.36H127.497V14.12H127.737C127.977 13.5333 128.27 12.9867 128.617 12.48C128.963 11.9733 129.377 11.5333 129.857 11.16C130.363 10.76 130.937 10.4533 131.577 10.24C132.243 10 132.99 9.88 133.817 9.88C134.803 9.88 135.71 10.0533 136.537 10.4C137.363 10.72 138.07 11.2133 138.657 11.88C139.243 12.5467 139.697 13.36 140.017 14.32C140.363 15.28 140.537 16.3867 140.537 17.64V31H134.617V18.44C134.617 15.7733 133.457 14.44 131.137 14.44C130.683 14.44 130.23 14.5067 129.777 14.64C129.35 14.7467 128.963 14.9333 128.617 15.2C128.27 15.44 127.99 15.7467 127.777 16.12C127.59 16.4933 127.497 16.9333 127.497 17.44V31H121.577ZM166.281 33.08C166.281 35.2667 165.361 36.88 163.521 37.92C161.681 38.96 158.788 39.48 154.841 39.48C152.868 39.48 151.241 39.36 149.961 39.12C148.681 38.9067 147.654 38.5867 146.881 38.16C146.134 37.7333 145.601 37.2267 145.281 36.64C144.988 36.0533 144.841 35.4133 144.841 34.72C144.841 33.5467 145.188 32.6533 145.881 32.04C146.574 31.4533 147.548 31 148.801 30.68V30.44C147.921 30.1733 147.214 29.8 146.681 29.32C146.174 28.8133 145.921 28.1067 145.921 27.2C145.921 26.1867 146.254 25.44 146.921 24.96C147.614 24.48 148.521 24.1067 149.641 23.84V23.6C148.414 23.0133 147.454 22.1867 146.761 21.12C146.094 20.0533 145.761 18.76 145.761 17.24C145.761 16.04 145.974 14.9867 146.401 14.08C146.828 13.1467 147.428 12.3733 148.201 11.76C149.001 11.1467 149.948 10.68 151.041 10.36C152.134 10.04 153.361 9.88 154.721 9.88C156.028 9.88 157.241 10.0267 158.361 10.32V9.2C158.361 8.4 158.641 7.73333 159.201 7.2C159.761 6.66667 160.534 6.4 161.521 6.4H165.161V10.72H160.201V11.08C161.321 11.6667 162.188 12.48 162.801 13.52C163.441 14.5333 163.761 15.7733 163.761 17.24C163.761 18.44 163.548 19.4933 163.121 20.4C162.694 21.3067 162.081 22.08 161.281 22.72C160.481 23.3333 159.521 23.8 158.401 24.12C157.308 24.44 156.081 24.6 154.721 24.6C154.108 24.6 153.521 24.5733 152.961 24.52C152.401 24.44 151.868 24.3333 151.361 24.2C151.068 24.36 150.814 24.56 150.601 24.8C150.414 25.04 150.321 25.3467 150.321 25.72C150.321 26.04 150.401 26.2933 150.561 26.48C150.721 26.6667 150.934 26.8133 151.201 26.92C151.494 27 151.828 27.0533 152.201 27.08C152.574 27.1067 152.961 27.12 153.361 27.12H158.081C159.548 27.12 160.801 27.2667 161.841 27.56C162.881 27.8533 163.734 28.2667 164.401 28.8C165.068 29.3333 165.548 29.96 165.841 30.68C166.134 31.4 166.281 32.2 166.281 33.08ZM160.681 33.52C160.681 32.9867 160.468 32.56 160.041 32.24C159.614 31.9467 158.801 31.8 157.601 31.8H150.521C149.988 32.2533 149.721 32.8133 149.721 33.48C149.721 34.12 149.988 34.64 150.521 35.04C151.081 35.4667 152.014 35.68 153.321 35.68H156.801C158.161 35.68 159.148 35.4933 159.761 35.12C160.374 34.7467 160.681 34.2133 160.681 33.52ZM154.721 20.84C155.921 20.84 156.788 20.5467 157.321 19.96C157.881 19.3733 158.161 18.6267 158.161 17.72V16.76C158.161 15.8533 157.881 15.1067 157.321 14.52C156.788 13.9333 155.921 13.64 154.721 13.64C153.548 13.64 152.694 13.9333 152.161 14.52C151.628 15.1067 151.361 15.8533 151.361 16.76V17.72C151.361 18.6267 151.628 19.3733 152.161 19.96C152.694 20.5467 153.548 20.84 154.721 20.84Z"
                fill="url(#grad)"
            />
        </Svg>
    );
}
