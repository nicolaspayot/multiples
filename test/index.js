import test from 'ava';
import range from 'lodash.range';

import multiples from '../src/index';

let numbers;
test.beforeEach(t => {
  numbers = range(1, 100);
});

test('multiples of 2, 3, 5, 7 from 1 to 100', t => {
  const samples = [2, 3, 5, 7];
  samples.forEach(m => {
    let expected = numbers.filter(n => n % m === 0);
    let result = multiples(1, 100).of(m).value();
    t.same(result, expected);
  });
});

test('multiples of (2, 3) from 1 to 100', t => {
  const expected = numbers.filter(n =>
    n % 2 === 0 && n % 3 === 0
  );
  const result = multiples(1, 100).of(2, 3).value();
  t.same(result, expected);
});

test('multiples of (2, 3, 5) from 1 to 100', t => {
  const expected = numbers.filter(n =>
    n % 2 === 0 && n % 3 === 0 && n % 5 === 0
  );
  const result = multiples(1, 100).of(2, 3, 5).value();
  t.same(result, expected);
});

test('multiples of (2, 3, 5, 7) from 1 to 100', t => {
  const expected = numbers.filter(n =>
    n % 2 === 0 && n % 3 === 0 && n % 5 === 0 && n % 7 === 0
  );
  const result = multiples(1, 100).of(2, 3, 5, 7).value();
  t.same(result, expected);
});

test('multiples of 2 but not of 3 from 1 to 100', t => {
  const expected = numbers.filter(n =>
    n % 2 === 0 && n % 3 !== 0
  );
  const result = multiples(1, 100).of(2).not.of(3).value();
  t.same(result, expected);
});

test('multiples of (2, 3) but not of (5, 7) from 1 to 100', t => {
  const expected = numbers.filter(n =>
    n % 2 === 0 && n % 3 === 0 && n % 5 !== 0 && n % 7 !== 0
  );
  const result = multiples(1, 100).of(2, 3).not.of(5, 7).value();
  t.same(result, expected);
});

test('multiples of 2 but not of (3, 5, 7) from 1 to 100', t => {
  const expected = numbers.filter(n =>
    n % 2 === 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0
  );
  const result = multiples(1, 100).of(2).not.of(3, 5, 7).value();
  t.same(result, expected);
});
