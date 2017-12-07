function birthdayCakeCandles(n, ar) {
    // Complete this function
    var blownOut = 0;
    var tallest = Math.max.apply(null, ar);

    if (n < 1 || n > 100000) {
        throw 'Number of candle(s) not in accepted range'
    }

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] < 1 || ar[i] > 100000000) {
            throw 'There are candle that placed not in accepted height range'
        }
        if (ar[i] == tallest) blownOut++;
    }

    return blownOut;
}

function main() {
    //var n = parseInt(readLine());
    var n = 4; // override input
    //ar = readLine().split(' ');
    //ar = ar.map(Number);
    var ar = [3, 2, 1, 3]; // override input
    var result = birthdayCakeCandles(n, ar);
    console.log(result);

}

main(); // execute program