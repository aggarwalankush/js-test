function solution(A) {

    if (A === null || A.length === 0) {
        return 1;
    }

    var temp = [];

    // write your code in JavaScript (Node.js 6.4.0)
    for (var i = 0; i < A.length; i++) {
        if (A[i] <= 0) {
            continue;
        }
        temp.push(A[i]);
    }

    if (temp.length === 0) {
        return 1;
    }


    for (var j = 0; j < temp.length; j++) {
        var num = Math.abs(temp[j]);
        if (num <= temp.length) {
            temp[num-1] = -Math.abs(temp[num-1]);
        }
    }


    for (var k = 0; k < temp.length; k++) {
        if (temp[k] > 0) {
            return k + 1;
        }
    }
    return temp.length + 1;
}

console.log(solution([-1,-3]));