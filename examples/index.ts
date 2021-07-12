// noinspection ES6PreferShortImport

import yaml from 'yaml';

import fs from 'fs';

import path from 'path';
import { Session } from '../src/';

function readCliConfig() {
    const configFile = path.join(
        process.env['HOME'] ?? '',
        '.config/yandex-cloud/config.yaml',
    );

    let config;
    try {
        config = yaml.parse(fs.readFileSync(configFile, 'utf8'));
    } catch (e) {
        throw new Error(`Failed to read config ${configFile}: ${e.toString()}`);
    }

    const current = config['current'];
    if (!current) {
        throw new Error(
            `Invalid config in ${configFile}: no current profile selected`,
        );
    }

    if (!config['profiles'][current]) {
        throw new Error(
            `Invalid config in ${configFile}: no profile named ${current} exists`,
        );
    }

    return config['profiles'][current];
}

export function run(fn: CallableFunction) {
    const config = readCliConfig();
    const session = new Session({ oauthToken: config['token'] });
    (async () => {
        if (config['endpoint']) {
            await session.setEndpoint(config['endpoint']);
        }
        await fn(session, config['cloud-id'], config['folder-id']);
    })()
        .then(() => {
        })
        .catch((e) => {
            console.error(e);
            process.exit(1);
        });
}

