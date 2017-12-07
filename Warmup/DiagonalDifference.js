function CalcAbsDiff2SumOfDiagonal(n, a) {

    let cConstraint = true;
    for (var i = 0; i < a.length; i++) {
        if (a[i] < -100 || a[i] > 100) {
            throw 'Element value must be between -100 to 100'
        }
    }

    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;
    let cursorDiagonal1 = 0;
    let cursorDiagonal2 = n - 1;

    let count = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {

            if (cursorDiagonal1 == count) {
                sumDiagonal1 += a[i][j];
                cursorDiagonal1 = cursorDiagonal1 + n + 1;
            }

            if (cursorDiagonal2 == count && cursorDiagonal2 != (n * n) - 1) {

                sumDiagonal2 += a[i][j];
                cursorDiagonal2 = cursorDiagonal2 + n - 1;
            }
            count++;
        }

    }

    let result = Math.abs(sumDiagonal1 - sumDiagonal2);
    console.log(result);

}

function main() {
    //var n = parseInt(readLine());
    var n = 3; // override input
    //   var a = [];
    //     for(a_i = 0; a_i < n; a_i++){
    //        a[a_i] = readLine().split(' ');
    //        a[a_i] = a[a_i].map(Number);
    //     }
    var a = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ]; // override input
    CalcAbsDiff2SumOfDiagonal(n, a);

}

main(); // execute program