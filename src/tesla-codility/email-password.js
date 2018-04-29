function solution(S) {
    if (!S || S.length === 0) {
        return -1;
    }
    var inputArray = S.split("");

    var maxLen = -1;
    for (var i = 0; i < S.length; i++) {
        var currentChar = inputArray[i];
        if (currentChar >= 'A' && currentChar <= 'Z') {
            maxLen = Math.max(maxLen, expand(inputArray, i));
        }
    }
    return maxLen;
}

function expand(inputArray, index) {
    var maxLen = 1;
    var low = index - 1;
    var high = index + 1;
    while (low >= 0) {
        var lowChar = inputArray[low];
        if ((lowChar >= 'A' && lowChar <= 'Z') || (lowChar >= 'a' && lowChar <= 'z')) {
            maxLen++;
            inputArray[low] = undefined;
        } else {
            break;
        }
        low--;
    }
    while (high < inputArray.length) {
        var highChar = inputArray[high];
        if ((highChar >= 'A' && highChar <= 'Z') || (highChar >= 'a' && highChar <= 'z')) {
            maxLen++;
            inputArray[high] = undefined;
        } else {
            break;
        }
        high++;
    }
    return maxLen;
}

console.log(solution("a0Ba"));
console.log("\n");
console.log(solution("a0bb"));
console.log("\n");
console.log(solution("a0bbbAbb0"));
console.log("\n");
console.log(solution("a0bb8aa8A"));
console.log("\n");
console.log(solution("ABCDEFGH"));
console.log("\n");
console.log(solution("ABCDEF0GH"));
console.log("\n");
