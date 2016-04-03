import range from 'lodash.range';

export default (start, end) => {

  const numbers = range(start, end);
  let samples = numbers;

  const multiplesOf = (isNot, candidates, multiples) =>
    candidates.filter(
      n => multiples.reduce((acc, m) => acc && (isNot ? n % m !== 0 : n % m === 0), true)
    );

  const value = () => samples;

  const of = isNot => {
    return (...multiples) => {
      samples = multiplesOf(isNot, samples, multiples);
      return api;
    };
  };

  const api = {
    value,
    of: of(false),
    not: { of: of(true) }
  };

  return api;
};
