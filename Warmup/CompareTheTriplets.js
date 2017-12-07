function solve(a0, a1, a2, b0, b1, b2) {
    // Complete this function
    let cP1 = true;
    let cP2 = true;
    let cP3 = true;
    let cP4 = true;
    let cP5 = true;
    let cP6 = true;
    cP1 = checkConstraint(a0);
    cP2 = checkConstraint(a1);
    cP3 = checkConstraint(a2);
    cP4 = checkConstraint(b0);
    cP5 = checkConstraint(b1);
    cP6 = checkConstraint(b2);

    if (!(cP1 && cP2 && cP3 && cP4 && cP5 && cP6)) {
        return 'All value must be between 1 to 100';
    } else {

        let alicePoint = 0;
        let bobPoint = 0;
        if (a0 > b0) {
            alicePoint++;
        } else if (b0 > a0) {
            bobPoint++;
        }
        if (a1 > b1) {
            alicePoint++;
        } else if (b1 > a1) {
            bobPoint++;
        }
        if (a2 > b2) {
            alicePoint++;
        } else if (b2 > a2) {
            bobPoint++;
        }

        return alicePoint + ' ' + bobPoint;
    }
}

function checkConstraint(val) {
    if (val < 1 || val > 100) {
        return false;
    } else
        return true;
}

function main() {
    //var a0_temp = readLine().split(' ');
    var a0_temp = [5, 6, 7]; // override input
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    //var b0_temp = readLine().split(' ');
    var b0_temp = [3, 6, 10]; // override input
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    //console.log(result.join(" "));
    console.log(result);


}

main(); // execute program