## random-pick-js

Picks random items from an array within given weights

## Installation

```tsx
npm i random-pick-js
```

## Usage

```tsx
import { randomPick } from 'random-pick-js'

const picked = randomPick(['icecream', 'cookie', 'anything', 'chicken', 'pizza'], { 
	cnt: 2,
	weights: [1, 3, 10, 2, 7]
});

console.log(picked); // example output: ['anything', 'chicken']
```
