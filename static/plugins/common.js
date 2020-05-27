function getQueryString(qryStr, exclude) {
  var result = "";

  if (!isBlank(qryStr)) {
    var qryStrArr = qryStr.split("&");

    var excludeArr = [];

    var paramArr = [];

    var sameCnt = 0;

    var resultArr = [];

    if (!isBlank(exclude)) {
      excludeArr = exclude.split(",");
    }

    for (var i = 0; i < qryStrArr.length; i++) {
      sameCnt = 0;

      paramArr = qryStrArr[i].split("=");

      for (var j = 0; j < excludeArr.length; j++) {
        if (paramArr[0] == excludeArr[j]) {
          sameCnt++;
        }
      }

      if (sameCnt == 0) {
        resultArr.push(qryStrArr[i]);
      }
    }

    result = resultArr.join("&");
  }

  return result;
}
