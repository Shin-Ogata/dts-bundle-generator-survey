const { resolve } = require('node:path');

module.exports = {
    compilationOptions: {
        followSymlinks: false,
        preferredConfigPath: resolve(__dirname, './tsconfig.json'),
    },
    entries: [
        {
            filePath: resolve(__dirname, './types/index.d.ts'),
            outFile: resolve(__dirname, './dist/lib-web2.d.ts'),
            failOnClass: false,
            noCheck: true,
            libraries: {
                inlinedLibraries: [
                    '@cdp/i18n'
                ],
            },
            output: {
                inlineDeclareGlobals: false,
                sortNodes: false,
                inlineDeclareExternals: false,
                noBanner: true,
                respectPreserveConstEnum: false
            },
        },
    ],
};
