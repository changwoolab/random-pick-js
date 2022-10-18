declare class Options {
    cnt?: number;
    weights?: number[];
}
export default function randomPick<T>(list: Array<T>, { cnt, weights }?: Options): Array<T>;
export {};
