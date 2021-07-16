export interface Cls {
    decode(value: any): any;
}
export interface Registry {
    [key: string]: Registry | Cls;
}
declare function register(pkg: string, root: Registry): void;
declare function lookup(pkg: string): Registry;
declare const _default: {
    register: typeof register;
    lookup: typeof lookup;
};
export default _default;
