/* eslint-disable */

/**
 * Custom babel config with path alias and decorators enabled
 */
module.exports = function (api) {
    api.cache(false);
    return {
        presets: ['module:@react-native/babel-preset'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src/'],
                    alias: {
                        '@': './src/',
                    },
                },
            ],
        ],
    };
};
