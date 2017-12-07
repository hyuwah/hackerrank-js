function divisibleSumPairs(n, k, ar) {
    // Complete this function
    let result = 0;
    for (let i = 0; i < ar.length - 1; i++) {
        //console.log(`$Ai${i}:${ar[i]}`);
        for (let j = i + 1; j < ar.length; j++) {
            //console.log(`$Aj${j}:${ar[j]}`);
            if ((ar[i] + ar[j]) % k === 0) {
                result++;
                //console.log(ar[i]+' + '+ar[j])
            }
        }
    }
    //console.log(result);
    return result;
}

function main() {
    //     var n_temp = readLine().split(' ');
    //     var n = parseInt(n_temp[0]);
    //     var k = parseInt(n_temp[1]);
    //     ar = readLine().split(' ');
    //     ar = ar.map(Number);
    var n = 6; // override input
    var k = 3; // override input
    var ar = [1, 3, 2, 6, 1, 2]; // override input
    var result = divisibleSumPairs(n, k, ar);
    console.log(result);

}

main(); // execute program