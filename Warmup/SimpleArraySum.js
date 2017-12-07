function simpleArraySum(n, ar) {
    // Complete this function
    var sum = 0;
    ar.forEach(num => {
        sum += num
    })
    return sum;
}

function main() {
    //var n = parseInt(readLine());
    //ar = readLine().split(' ');
    //ar = ar.map(Number);
    var n = 6; // override input
    var ar = [1, 2, 3, 4, 10, 11]; // override input
    var result = simpleArraySum(n, ar);
    console.log(result);

}

main(); // execute program