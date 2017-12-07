function main() {
    //var t = parseInt(readLine());
    var t = 2; // Override input
    var n_ar = [12, 1012]; // Override input
    for (var a0 = 0; a0 < t; a0++) {
        //var n = parseInt(readLine());
        var n = n_ar[a0]; // Override input

        let divisible = 0;
        var arrn = n.toString().split('')
        arrn.forEach(num => {
            if (n % num == 0) {
                divisible++;
            }
        })
        console.log(divisible)
    }


}

main(); // execute program