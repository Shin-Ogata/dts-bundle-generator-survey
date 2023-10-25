const { resolve, basename } = require('node:path');
const { rm } = require('node:fs/promises');
const { order } = require('./package-order');

async function clean(root) {
    dirs = ['node_modules', 'built', 'dist'];

    const del = async (path) => rm(path, { force: true, recursive: true });
    for (const dir of dirs) {
        await del(resolve(root, dir));
    }
}

async function main() {
    const cwdBackup = process.cwd();

    for (const pkg of order) {
        const location = resolve('packages', pkg);
        const pkgname = basename(location);
        console.log('\n******************************');
        console.log(`${pkgname}: clean`);
        await clean(location);
    }
}

main();
