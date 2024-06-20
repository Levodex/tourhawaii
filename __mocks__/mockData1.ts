/**
 * Mock data for categories on the Landing page
 */

/**
 * Type for categories
 * Later, other elements could be added as well
 */
export type LandingPageCategory = {
    title: string;
    route?: string; // TODO: In future versions, do something useful with this
    onClick?: () => void;
};

/**
 * Type for Top Spots
 * Later, other elements could be added as well
 */
export type SurfingPageTopSpot = {
    name: string;
    image: number; // TODO: In future versions, load dynamically from API
    route?: string; // TODO: In future versions, do something useful with this
    onClick?: () => void;
};

export const CATEGORIES: Array<LandingPageCategory> = [
    {
        title: 'Adventure',
    },
    {
        title: 'Culinary',
    },
    {
        title: 'Eco-tourism',
    },
    {
        title: 'Family',
    },
    {
        title: 'Sport',
    },
];

export const TOP_SPOTS: Array<SurfingPageTopSpot> = [
    {
        name: 'Maui',
        image: require('../src/assets/images/maui-thumbnail.png'),
    },
    {
        name: 'Kauai',
        image: require('../src/assets/images/kauai-thumbnail.png'),
    },
    {
        name: 'Honolulu',
        image: require('../src/assets/images/honolulu-thumbnail.png'),
    },
];
