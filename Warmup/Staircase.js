function main() {
    //var n = parseInt(readLine());
    var n = 2; // override input
    staircase(n);
}

function staircase(n) {
    if (n < 1) {
        throw "Stair level must be positive"
    }
    var stair = [];
    var count = 0;
    for (var i = 0; i < n; i++) {
        var horiz = [];

        for (var j = 0; j < n; j++) {
            if (i == count && j >= n - 1 - count) {
                horiz[j] = '#';
            } else {
                horiz[j] = ' ';
            }
        }
        count++;
        stair.push(horiz.join(''));
    }

    console.log(stair.join('\n'));
}

main(); // execute program