function aVeryBigSum(n, ar) {
    // Complete this function
    if (n < 1 || n > 10) {
        throw "Array size must between 1 to 10";
    }

    let sum = 0;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] <= 0 || ar[i] > 10000000000) {
            throw "Element value exceeded limit"
        }
        sum += ar[i];
    }
    return sum;
}

function main() {
    //var n = parseInt(readLine());
    var n = 5; // override input
    //ar = readLine().split(' ');
    //ar = ar.map(Number);
    var ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]; // override input
    var result = aVeryBigSum(n, ar);
    console.log(result);

}

main(); // execute program