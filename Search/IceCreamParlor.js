function main() {

    var input = "2\n4\n5\n1 4 5 3 2\n4\n4\n2 2 4 3"; // override input

    //Enter your code here
    // Populate variables
    let input_arr = input.split('\n');
    let trip = input_arr[0];
    let mOnTrip = [];
    for (let i = 1; i < input_arr.length; i += 3) {
        mOnTrip.push(input_arr[i]);
    }
    let flavorsOnTrip = [];
    for (let i = 3; i < input_arr.length; i += 3) {
        flavorsOnTrip.push(input_arr[i].split(' '));
    }

    for (let i = 0; i < trip; i++) {
        let flavors = flavorsOnTrip[i];
        // console.log(flavors);
        // console.log(mOnTrip[i]);
        for (let j = 0; j < flavors.length; j++) {
            for (let k = j + 1; k < flavors.length; k++) {

                if (parseInt(mOnTrip[i]) === (parseInt(flavors[j]) + parseInt(flavors[k]))) {
                    console.log(parseInt(j + 1) + " " + parseInt(k + 1));
                }
            }
        }
    }
}

main(); // execute program