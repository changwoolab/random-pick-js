"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPick = void 0;
class Options {
}
function randomPick(array, { cnt = 1, weights = undefined } = {}) {
    if (array.length < 1)
        throw new Error('no elements to pick');
    if (cnt > array.length)
        throw new Error('cnt is larger than list length');
    if (weights && array.length !== weights.length)
        throw new Error('list length and weights length must be same');
    let list = [...array];
    const result = [];
    while (cnt--) {
        let picked;
        if (weights) {
            const probability = Math.random();
            let weightedProbability = 0;
            for (let i = 0; i < weights.length; i++)
                weightedProbability += probability * weights[i];
            for (picked = 0; picked < weights.length; picked++) {
                weightedProbability -= weights[picked];
                if (weightedProbability < 0)
                    break;
            }
            weights.splice(picked, 1);
        }
        else {
            picked = Math.floor(Math.random() * list.length);
        }
        result.push(list.splice(picked, 1)[0]);
    }
    return result;
}
exports.randomPick = randomPick;
