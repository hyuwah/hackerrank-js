function main() {
    //var n = parseInt(readLine());
    //arr = readLine().split(' ');
    //arr = arr.map(Number);
    var n = 6; // override input
    var arr = [-4, 3, -9, 0, 4, 1]; // override input
    PlusMinus(arr);
}

function PlusMinus(arr) {

    let plus = 0;
    let minus = 0;
    let zero = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) zero++;
        if (arr[i] > 0) plus++;
        if (arr[i] < 0) minus++;
    }

    console.log(plus / arr.length);
    console.log(minus / arr.length);
    console.log(zero / arr.length);

}

main(); // execute program