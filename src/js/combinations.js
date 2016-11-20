(function elementFactory(exports) {


  function permutation(elements) {
    var results = [];

    function permute(arr, mem) {
      var cur, memo = mem || [];

      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }

      return results;
    }

    return permute(elements);
  }

  function combination(list) {
    var result = [],
      listSize = list.length,
      combinationsCount = (1 << listSize);

    for (var i = 1; i < combinationsCount; i++) {
      var c = [];
      for (var j = 0; j < listSize; j++) {
        if ((i & (1 << j))) {
          c.push(list[j]);
        }
      }
      result.push(c);
    }
    return result;
  }


  exports.permutation = permutation;
  exports.combination = combination;

})(typeof(module) !== "undefined" && module.exports ? module.exports : window);