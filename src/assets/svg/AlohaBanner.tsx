/**
 * AlohaBanner for landing Page
 */

import React from 'react';
import Svg, { Path } from 'react-native-svg';

/**
 * Aloha Banner
 * Design schema: https://www.figma.com/design/1flpTvsVFD6DDRFnIpEtlw/App-Developer-Assignment
 */
export function AlohaBanner() {
    return (
        <Svg
            width="95"
            height="36"
            viewBox="0 0 95 36"
        >
            <Path
                d="M5.8822 27.3366C4.32781 29.9791 2.98069 32.5179 1.94443 34.7976C1.73718 35.264 1.27086 35.264 1.0118 34.9013C0.390047 34.0723 0.182792 32.5179 1.27086 29.6164C1.58174 28.8392 2.04805 27.8029 2.66981 26.663C1.52993 26.0413 1.11542 25.2641 0.959977 24.9014C0.700913 24.2278 0.804553 24.0206 1.58174 24.1242C2.30712 24.2278 3.0843 24.3314 3.9133 24.3833C7.9547 17.3367 15.1567 7.09076 20.6359 2.58305C21.4649 1.90948 21.983 1.90947 22.5011 2.63485C23.0193 3.36023 23.1747 3.46386 23.6928 4.75918C24.211 6.00268 24.1592 7.14256 23.6928 8.54151C22.3457 12.6347 20.895 17.9196 19.9105 23.6061C21.4649 24.1242 22.0348 25.1605 22.2421 26.2485C22.3457 26.7148 22.1385 26.8703 21.6721 26.7148C21.0504 26.5594 20.325 26.4558 19.4442 26.404C19.0815 29.0982 18.7706 31.9479 18.667 34.694C18.667 35.2121 18.3561 35.3676 17.8898 35.1603C16.8536 34.694 16.0246 33.3987 15.9727 30.4454C15.9727 29.4091 16.0245 28.062 16.18 26.5076C12.5013 26.7667 8.30444 27.3884 5.8822 27.3366ZM16.5945 23.347C17.3717 17.9585 18.8224 11.443 20.4286 7.40164C16.4909 11.8057 11.7759 18.0751 7.85109 24.2278C10.9987 23.9688 14.1593 23.3988 16.5945 23.347Z"
                fill="#001A1A"
            />
            <Path
                d="M27.6305 33.8521C30.1175 34.0593 33.7444 30.3288 35.7651 26.3392C36.1278 25.6656 36.6977 25.6138 36.905 26.3392C37.164 27.1682 36.9568 28.3081 36.3869 29.5516C35.6615 31.106 31.8791 35.4064 27.7341 35.3028C24.159 35.1992 22.242 32.7122 23.4337 27.1164C25.3507 18.1009 31.2574 8.7358 36.5293 3.24364C37.3065 2.41464 38.0319 2.31101 38.7573 2.98458C40.2599 4.33171 40.5707 6.24878 39.949 8.68398C38.3428 15.057 32.5398 21.2615 27.9414 24.2667C25.8689 29.3443 25.2989 33.6448 27.6305 33.8521ZM38.1874 7.59591C37.5138 7.18141 33.6796 12.9326 30.1045 19.5517C29.6382 20.3807 29.2237 21.2097 28.8611 22.0387C35.9594 16.3005 38.8609 8.01042 38.1874 7.59591Z"
                fill="#001A1A"
            />
            <Path
                d="M51.0889 24.176C50.0008 28.5801 46.7366 33.8132 42.9025 35.1085C41.0372 35.7303 38.4466 35.523 36.3741 32.8288C34.0943 29.8236 34.8715 25.3159 37.2031 21.1709C39.1719 17.6476 42.3325 14.6425 45.4413 14.4352C47.0475 14.3316 47.9283 14.7979 48.9645 16.1969C50.1562 17.8031 51.7106 18.1657 51.3998 21.8963C51.3479 22.3108 51.3479 22.6735 51.2961 23.088C51.607 23.088 51.9179 22.9843 52.3324 22.9843C52.6951 22.9843 52.6951 23.2434 52.4878 23.5025C52.1122 23.917 51.5941 24.1242 51.0889 24.176ZM46.6848 22.8807C45.5967 22.0517 44.3532 20.2383 44.3014 18.3212C42.9025 19.5129 41.3999 21.2227 40.3118 23.1916C38.1357 27.1294 37.3585 31.8961 38.7056 33.036C40.1564 34.2277 43.317 32.4143 45.8558 27.6475C46.633 26.1967 47.2547 24.746 47.6692 23.5025C47.3065 23.347 46.9957 23.1398 46.6848 22.8807ZM48.4464 18.2694C48.1874 16.6114 47.1511 16.9222 46.892 18.4248C46.633 19.8238 47.2029 21.3263 48.0319 22.1035C48.4464 20.4973 48.6019 19.202 48.4464 18.2694Z"
                fill="#001A1A"
            />
            <Path
                d="M64.9616 35.4583C60.6093 35.4583 59.5213 32.2977 61.0757 27.79C62.7855 22.7641 67.2932 17.3756 66.4642 16.9093C65.7388 16.4948 60.0912 20.0181 57.0861 24.9403C55.2208 27.9972 53.3038 31.6241 52.0602 34.7847C51.853 35.251 51.4903 35.3546 51.1794 34.992C50.3504 34.0593 49.8841 32.6086 50.9722 29.4998C52.7856 24.3185 63.5497 6.09338 67.7465 0.860289C68.2129 0.238535 68.731 0.290339 68.9901 0.912093C69.6636 2.41466 69.5082 5.00531 67.5393 8.26952C66.2958 10.342 63.5497 14.5389 61.3218 18.0103C63.4461 15.9378 66.1404 14.228 67.5393 14.3834C69.3009 14.5907 70.9071 17.1813 69.56 19.8238C68.4201 22.1035 65.9331 25.8859 64.7414 28.5801C63.4461 31.5853 63.7052 34.0205 65.6222 33.9168C67.7465 33.8132 70.5963 30.0827 72.2025 26.7667C72.4097 26.3004 72.9278 26.3004 73.1351 26.7149C73.3941 27.2848 73.3942 28.3729 72.617 29.9273C71.1792 32.8676 68.0186 35.4583 64.9616 35.4583Z"
                fill="#001A1A"
            />
            <Path
                d="M90.13 14.6425C90.5963 13.9689 91.0108 13.8653 91.3735 14.3316C92.1507 15.2642 92.5652 17.4922 91.3217 20.0828C90.1818 22.4144 87.5911 26.3004 86.3476 29.0465C85.0523 31.948 85.0005 34.1759 86.7621 34.0723C88.8865 33.9687 91.7362 30.4454 93.5496 26.8703C93.8087 26.404 94.1714 26.3522 94.3786 26.8185C94.5859 27.2848 94.5859 28.5801 93.9123 30.0309C92.5652 32.8806 89.301 35.7303 86.4513 35.5749C83.6534 35.4194 82.2026 33.7614 82.2026 31.3262C80.5446 33.4505 78.213 35.3676 75.726 35.3676C70.9074 35.3676 69.923 28.7874 74.2234 22.531C78.4203 16.4171 82.5135 14.0855 85.1041 14.0855C87.3321 14.0855 88.3683 15.7953 88.2647 17.816C88.9383 16.5596 89.56 15.4715 90.13 14.6425ZM85.9849 16.7668C84.3269 16.6114 80.5446 19.9792 77.6949 24.5905C74.9488 29.0464 74.2753 33.606 76.296 33.6578C78.4203 33.7096 81.1145 30.3936 83.757 25.8341C87.0212 20.1347 87.4875 16.9223 85.9849 16.7668Z"
                fill="#001A1A"
            />
        </Svg>
    );
}