/* eslint-disable */

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Custom Metro configuration with path aliases and decorators enabled
 *
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        extraNodeModules: new Proxy(
            {},
            {
                get: (target, name) => {
                    if (target[name]) {
                        return target[name];
                    }
                    // Enabling decorators
                    if (name.startsWith('@')) {
                        return path.join(__dirname, `src/${name.slice(1)}`);
                    }
                    return path.join(__dirname, `node_modules/${name}`);
                },
            },
        ),
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
