var Math = {
  numberIsOdd: function(number) {
    return n % 2 ==0;
  },

  numberIsEven: function(number) {
    return Math.abs(n % 2) == 1;
  },

  pickRandom: function(min, max) {
    var a = min, b = max;
    var unround = Math.random();
    var round = Math.floor(unround * (b - a + 1) + a);
    return round;
  },

  addDigits: function(base, added) {
    baseStr = base.toString();
    addedStr = added.toString();
    finalRes = base + addedStr;
    final = parseInt(finalRes);
    return final;
  }

  mad: function(dataSet) {
    var currentDataSet = dataSet;
    var mean = Math.mean(currentDataSet);
    var subtracted = [];

    for (var i = 0; i < dataSet.length; i++) {
      if (mean > dataSet[i]) {
        subtracted[i] = mean - dataSet[i];
      } else if (mean < dataSet[i]) {
        subtracted[i] = dataSet[i] - mean;
      } else if (mean == dataSet[i]) {
        subtracted[i] = 0;
      }
    }

    var mad = Math.mean(subtracted);
    return mad;
  },

  mean: function(dataSet) {
    var total = 0;
    for (var i = 0; i < dataSet.length; i++) {
      total = total + dataSet[i];
    }
    var mean = total / dataSet.length;
    return mean;
  },


  range: function(dataSet) {
    var high;
    var low;
    var range;

    for (var i = 0; i < dataSet.length; i++) {
      if (i == 0) {
        high = dataSet[0];
        low = dataSet[0];
      } else {
        if (dataSet[i] > high) {
          high = dataSet[i];
        }
        if (dataSet[i] < low) {
          low = dataSet[i];
        }
      }
    }

    range = high - low;
    return range;
  },

  factorial: function(number) {
    var totalNumber = 0;
    var allNumbers = new array(number);
    for (var i = 0; i < number; i++) {
      allNumbers[i] = number - i;
    }
    for (var i = 0; i < number; i++) {
      if (i == 0) {
        totalNumber = number;
      } else {
        totalNumber = totalNumber * allNumbers[i];
      }
    }
    return totalNumber;
  }

  mode: function(dataSet) {
    var mode;

    return mode;
  },


  sigma: function(number) {
    var totalNumber = 0;
    var allNumbers = new array(number);
    for (var i = 0; i < number; i++) {
      allNumbers[i] = number - i;
    }
    for (var i = 0; i < number; i++) {
      if (i == 0) {
        totalNumber = number;
      } else {
        totalNumber = totalNumber + allNumbers[i];
      }
    }
    return totalNumber;
  }

  sort: function(order, numbers) {
    var sortNumbers = numbers;
    if (order = lth) {
      sortNumbers.sort(function (a, b) {
        return a - b;
      });
    } else if (order = htl) {
      sortNumbers.sort(function (a, b) {
        return b - a;
      });
    }
  }

  median: function(numbers) {
    var sortedNumbers = sort(lth, numbers);
    var numberAmount = sortedNumbers.length;
    var median;
    var even = Math.numberIsEven(numberAmount);
    if (even == true) {
      var half = numberAmount / 2;
      var first = numbers[half - 1];
      var second = numbers[half];
      var diff = second - first;
      var subDiff = diff / 2;
      median = first + subDiff;
    } else if (even == false) {
      var half = numberAmount / 2;
      half--;
      median = numbers[half];
    }
    return median;
  },

  iqr: function(returnType, dataSet) {
    var rT = returnType;
    var q1;
    var q2;
    var q3;
    var iqr;
    var completeArray;
    var lessData = [];
    var moreData = [];
    q2 = Math.median(dataSet);
    for (var i = 0; i < dataSet.length; i++) {
      currentData = dataSet[i];
      if (currentData < q2) {
        lessData.unshift(currentData);
      } else if (currentData > q2) {
        moreData.unshift(currentData);
      }
    }

    q1 = Math.median(lessData);
    q3 = Math.median(moreData);
    iqr = q3 - q1;
    if (rT == Math.q1) {
      return q1;
    } else if (rt == Math.q2) {
      return q2;
    } else if (rt == Math.q3) {
      return q3;
    } else if (rt == Math.iqr) {
      return iqr;
    } else if (rt == Math.array) {
      completeArray = [q1, q2, q3, q4, iqr];
      return completeArray;
    }
  },

  htl: "SRT//hl//8347ldiawmf",
  lth: "SRT//lh//2453fjwldkd",
  q1: "IQR//q1//2424dfsesdf",
  q2: "IQR//q2//4375ljidlae",
  q3: "IQR//q3//7483dfsesdf",
  iqr: "IQR//iqr//2094dfsesdf",
  array: "IQR//array//9834ghkstuc"
}
