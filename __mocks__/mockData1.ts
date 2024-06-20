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
