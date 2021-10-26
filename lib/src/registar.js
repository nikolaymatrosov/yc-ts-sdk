const REGISTRY = {};
function register(pkg, root) {
    let parts = pkg.split('.');
    let currentRoot = REGISTRY;
    while (parts.length > 1) {
        if (!currentRoot[parts[0]]) {
            currentRoot[parts[0]] = {};
        }
        currentRoot = currentRoot[parts[0]];
        parts = parts.slice(1);
    }
    currentRoot[parts[0]] = root;
}
function lookup(pkg) {
    pkg = pkg.replace(/^yandex\.cloud\./, 'api.');
    let parts = pkg.split('.');
    let currentRoot = REGISTRY;
    while (parts.length > 0) {
        currentRoot = currentRoot[parts[0]];
        parts = parts.slice(1);
    }
    return currentRoot;
}
export default {
    register,
    lookup,
};
