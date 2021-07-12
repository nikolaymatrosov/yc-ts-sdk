interface Registry {
    [key: string]: Registry;
}
declare function register(pkg: string, root: Registry): void;
declare function lookup(pkg: string): Registry;
declare const _default: {
    register: typeof register;
    lookup: typeof lookup;
};
export default _default;
