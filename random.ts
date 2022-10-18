class Options {
    cnt?: number;
    weights?: number[];
}

export function randomPick<T>(array: Array<T>, { cnt = 1, weights = undefined }: Options = {}): Array<T> {
    if (array.length < 1) throw new Error('no elements to pick');
    if (cnt > array.length) throw new Error('cnt is larger than list length');
    if (weights && array.length !== weights.length) throw new Error('list length and weights length must be same');


    let copiedArray = [...array];
    let copiedWeights = weights ? [...weights] : undefined;


    const result: T[] = []
    while (cnt--) {
        let picked: number;
        if (copiedWeights) {
            const probability = Math.random()
            let weightedProbability = 0;
            for (let i = 0; i < copiedWeights.length; i++) {
                weightedProbability += probability * copiedWeights[i];
            }

            for (picked = 0; picked < copiedWeights.length; picked++) {
                weightedProbability -= copiedWeights[picked];
                if (weightedProbability < 0) break;
            }
            copiedWeights.splice(picked, 1);
        } else {
            picked = Math.floor(Math.random() * copiedArray.length);
        }
        result.push(copiedArray.splice(picked, 1)[0]);
    }
    return result;
}
