export interface Cls {
    decode(value: any): any;
}

export interface Registry {
    [key: string]: Registry | Cls

}

const __registry: Registry = {};

function register(pkg: string, root: Registry) {
    let parts = pkg.split('.');
    let currentRoot = __registry;
    while (parts.length > 1) {
        if (!currentRoot[parts[0]]) {
            currentRoot[parts[0]] = {} as Registry;
        }
        currentRoot = currentRoot[parts[0]] as Registry;
        parts = parts.slice(1);
    }
    currentRoot[parts[0]] = root;
}

function lookup(pkg: string) {
    pkg = pkg.replace(/^yandex\.cloud\./, 'api.');
    let parts = pkg.split('.');
    let currentRoot = __registry;
    while (parts.length > 0) {
        currentRoot = currentRoot[parts[0]] as Registry;
        parts = parts.slice(1);
    }
    return currentRoot;
}

export default {
    register,
    lookup,
};
