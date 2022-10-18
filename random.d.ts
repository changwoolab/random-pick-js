declare class Options {
    cnt?: number;
    weights?: number[];
}
export declare function randomPick<T>(list: Array<T>, { cnt, weights }?: Options): Array<T>;
export {};
