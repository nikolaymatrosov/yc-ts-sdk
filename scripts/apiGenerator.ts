import yaml from 'yaml';
import * as fs from 'fs';
import * as _ from 'lodash';

interface Service {
    endpoint: string;
    filename?: string
}

interface Package {
    services: { [name: string]: Service }
}

interface Config {
    packages: { [key: string]: Package }
}

const config: Config = yaml.parse(fs.readFileSync('./config.yaml', { encoding: 'utf-8' }));

function appendCommonImports(content: string): string {
    return content + `import { SdkServiceDefinition, Session } from 'src';
    import { Client } from 'nice-grpc';`;

}

function appendService(content: string, serviceName: string, endpoint: string, path: string[]): string {
    return `${content}
        import { ${serviceName}Service } from 'cloud/${path.join('/')}';
        export const ${serviceName}Def: SdkServiceDefinition<typeof ${serviceName}Service> = {
            ...${serviceName}Service,
            __endpointId: '${endpoint}'
        };
        
        export function ${serviceName}(session?: Session): Client<typeof ${serviceName}Service, {}> {
            if (session === undefined) {
                session = new Session();
            }
            return session.client(${serviceName}Def);
        }`;
}

for (const [name, pack] of Object.entries(config.packages)) {
    const path = name.split('.');
    let content = appendCommonImports('');
    console.log(name, pack.services);
    for (const [serviceName, { endpoint, filename }] of Object.entries(pack.services)) {
        const filePath = [...path, filename ?? _.snakeCase(serviceName)];
        content = appendService(content, serviceName, endpoint, filePath);
    }
    const modulePath = ['..', 'api', ...path].join('/');
    fs.mkdirSync(modulePath, { recursive: true });
    fs.writeFileSync(modulePath + '/index.ts', content, { encoding: 'utf-8' });
}