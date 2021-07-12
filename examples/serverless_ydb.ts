// noinspection ES6PreferShortImport

import { run } from './';

import { createDriver } from '../src/slydb';

run(async () => {
    const driver = createDriver();
    const timeout = 2000;
    if (!(await driver.ready(timeout))) {
        console.log(`Driver has not become ready in ${timeout}ms!`);
        process.exit(1);
    }
});
