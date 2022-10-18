import randomPick from "./random";

const toPick: string[] = []
for (let i = 0; i < 10; i++) {
    toPick.push(String.fromCharCode('a'.charCodeAt(0)+i));
}

const weights: number[] = []
for (let i = 10; i > 0; i--) {
    weights.push(i);
}

const picked = randomPick(toPick, {
  cnt: 3,
  weights,
});

console.log(picked)