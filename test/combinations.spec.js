var assert = require('assert'),
  elementFactory = require('../src/js/combinations');

describe('Combinations', function () {
  describe('Permutations should return expected results', function () {

    it('for 1 element', function () {
      assert.deepEqual([
        ['a']
      ], elementFactory.permutation(['a']));
    });

    it('for 2 elements', function () {
      assert.deepEqual([
        ['a', 'b'],
        ['b', 'a']
      ], elementFactory.permutation(['a', 'b']));
    });


    it('for 3 elements', function () {
      assert.deepEqual([
        ['a', 'b', 'c'],
        ['a', 'c', 'b'],
        ['b', 'a', 'c'],
        ['b', 'c', 'a'],
        ['c', 'a', 'b'],
        ['c', 'b', 'a']
      ], elementFactory.permutation(['a', 'b', 'c']));
    });

    it('for 4 elements', function () {
      assert.deepEqual(
        [
          ["a", "b", "c", "d"],
          ["a", "b", "d", "c"],
          ["a", "c", "b", "d"],
          ["a", "c", "d", "b"],
          ["a", "d", "b", "c"],
          ["a", "d", "c", "b"],
          ["b", "a", "c", "d"],
          ["b", "a", "d", "c"],
          ["b", "c", "a", "d"],
          ["b", "c", "d", "a"],
          ["b", "d", "a", "c"],
          ["b", "d", "c", "a"],
          ["c", "a", "b", "d"],
          ["c", "a", "d", "b"],
          ["c", "b", "a", "d"],
          ["c", "b", "d", "a"],
          ["c", "d", "a", "b"],
          ["c", "d", "b", "a"],
          ["d", "a", "b", "c"],
          ["d", "a", "c", "b"],
          ["d", "b", "a", "c"],
          ["d", "b", "c", "a"],
          ["d", "c", "a", "b"],
          ["d", "c", "b", "a"]
        ], elementFactory.permutation(['a', 'b', 'c', 'd']));
    });

  });

  describe('Combination should return expected results', function () {

    it('for 1 element', function () {
      assert.deepEqual([
        ['a']
      ], elementFactory.combination(['a']));
    });

    it('for 2 elements', function () {
      assert.deepEqual([
        ['a'],
        ['b'],
        ['a', 'b']
      ], elementFactory.combination(['a', 'b']));
    });
    it('for 3 elements', function () {
      assert.deepEqual([
        ['a'],
        ['b'],
        ['a', 'b'],
        ['c'],
        ['a', 'c'],
        ['b', 'c'],
        ['a', 'b', 'c']
      ], elementFactory.combination(['a', 'b', 'c']));
    });

  });
});