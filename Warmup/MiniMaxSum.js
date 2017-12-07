function main() {
    //arr = readLine().split(' ');
    //arr = arr.map(Number);
    var arr = [1, 2, 3, 4, 5]; // override input
    minimaxsum(arr);
}

function minimaxsum(arr) {
    var sumArr = [];
    var cursor = 0;
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] < 1 || arr[j] > 10000000000) {
                throw "Element value not in accepted range";
            }

            if (cursor != j)
                sum += arr[j];
        }
        cursor++;
        sumArr.push(sum);
    }
    var min = Math.min.apply(null, sumArr);
    var max = Math.max.apply(null, sumArr);
    console.log(min + ' ' + max);
}

main(); // execute program