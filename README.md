# multiples
Generate a list of integers from i1 to i2 verifying conditions about given multiple(s)

[![npm version](https://badge.fury.io/js/multiples.svg)](https://badge.fury.io/js/multiples)

## Install

```bash
$ npm install multiples --save
```

## Usage

```js
var multiples = require('multiples');

// Get multiples of 3 from 1 to 9
var numbers = multiples(1, 10).of(3).value();
console.log(numbers); // [3, 6, 9]

// Get multiples of 3 and 5 from 1 to 49
numbers = multiples(1, 50).of(3, 5).value();
console.log(numbers); // [15, 30, 45]

// Get multiples of 3 but not 5 from 1 to 19
numbers = multiples(1, 20).of(3).not.of(5).value();
console.log(numbers); // [3, 6, 9, 12, 18]

// Get multiples of 3 but not 5 and 7 from 1 to 19
numbers = multiples(1, 20).of(3).not.of(2, 5).value();
console.log(numbers); // [3, 9]
```

## License

The MIT License (MIT)
