function main() {
    //     var n_temp = readLine().split(' ');
    //     var n = parseInt(n_temp[0]);
    //     var k = parseInt(n_temp[1]);
    //     height = readLine().split(' ');
    //     height = height.map(Number);

    var n = 5; // Override input
    var k = 4; // Override input
    var height = [1, 6, 3, 5, 2]; // Override input

    // your code goes here
    let mb = 0;
    let sorted = height.sort((a, b) => {
        return b - a
    });
    let highest = sorted[0];
    if (highest > k) {
        mb = highest - k;
    }

    console.log(mb);

}

main(); // execute program