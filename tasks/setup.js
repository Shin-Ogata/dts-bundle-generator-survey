const { resolve, basename } = require('node:path');
const command = require('./command');
const { order } = require('./package-order');

async function main() {
    const cwdBackup = process.cwd();

    for (const pkg of order) {
        const location = resolve('packages', pkg);
        try {
            const pkgname = basename(location);
            console.log('\n******************************');
            console.log(`${pkgname}: npm install`);
            process.chdir(location);
            await command('npm', 'install');
        } finally {
            process.chdir(cwdBackup);
        }
    }
}

main();
