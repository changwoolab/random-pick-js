import { randomPick } from './index';

const picked = randomPick(
  ['icecream', 'cookie', 'anything', 'chicken', 'pizza'],
  {
    cnt: 2,
    weights: [1, 3, 10, 2, 7],
  }
);

console.log(picked);
