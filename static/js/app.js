//@ sourceMappingURL=app.map
var PrimeController;

PrimeController = function($scope) {
  var amount, checkLevel, getNumbers, getPrimePosition, getRandInt, getRandOpponent, getRandPrime, maxNumber, minNumber;

  minNumber = 0;
  maxNumber = 999;
  amount = 2;
  $scope.score = 0;
  $scope.level = 1;
  $scope.primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
  $scope.pick = function(number) {
    if (_.contains($scope.primes, number)) {
      $scope.score++;
    } else {
      $scope.score--;
    }
    checkLevel();
    return getNumbers();
  };
  getNumbers = function() {
    var num, primePos, randPrimeNumber;

    $scope.numbers = new Array();
    $scope.numbers = (function() {
      var _i, _ref, _results;

      _results = [];
      for (num = _i = 0, _ref = amount - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; num = 0 <= _ref ? ++_i : --_i) {
        _results.push(getRandOpponent());
      }
      return _results;
    })();
    randPrimeNumber = getRandPrime();
    primePos = getPrimePosition();
    return $scope.numbers.splice(primePos, 0, randPrimeNumber);
  };
  getRandPrime = function() {
    var primeInd;

    primeInd = getRandInt(minNumber, $scope.primes.length - 1);
    return $scope.primes[primeInd];
  };
  getPrimePosition = function() {
    var int, positionInd;

    int = getRandInt();
    return positionInd = int % (amount + 1);
  };
  getRandOpponent = function() {
    var opponent;

    opponent = getRandInt();
    if (opponent % 2 === 0) {
      opponent++;
    }
    if (_.contains($scope.primes, opponent)) {
      opponent = getRandOpponent();
    }
    return opponent;
  };
  getRandInt = function(min, max) {
    if (min == null) {
      min = minNumber;
    }
    if (max == null) {
      max = maxNumber;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  checkLevel = function() {
    if ($scope.score < 100) {
      if ($scope.score < 20) {
        amount = 2;
      }
      if ($scope.score >= 20 && $scope.score < 40) {
        amount = 3;
      }
      if ($scope.score >= 40 && $scope.score < 60) {
        amount = 4;
      }
      if ($scope.score >= 60 && $scope.score < 80) {
        amount = 5;
      }
      if ($scope.score >= 80 && $scope.score < 100) {
        amount = 6;
      }
    }
    return $scope.level = amount - 1;
  };
  return getNumbers();
};
