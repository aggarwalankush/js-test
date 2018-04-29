function logIndexes(arr) {
    if (!(arr && arr.length > 0)) {
        return;
    }
    var len = arr.length;
    var index = 0;

    (function recur() {
        if (index < len) {
            setTimeout(() => {
                console.log(index++);
                recur();
            }, 1000);
        }
    })();

}

// logIndexes([1, 2, 3]);


function findAdditiveFactors(list_of_ints, target) {
    let set = new Set();
    for (let num of list_of_ints) {
        if(set.has(target-num)) {
            return [target - num, num];
        }
        set.add(num);
    }
    return [];
}

console.log(findAdditiveFactors([1, 10, 5, 4, 8, 2, 3], 6));