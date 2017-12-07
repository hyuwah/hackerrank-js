function main() {

    var input = '5\n2 4 6 8 3';

    //Enter your code here
    let arr = input.split('\n')[1].split(' ');
    let e = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {

        if (arr[i - 1] > e) {
            arr[i] = arr[i - 1];
            console.log(arr.join(' '));
            if (i - 1 === 0) {
                arr[i - 1] = e;
                console.log(arr.join(' '));
            }
        } else if (arr[i - 1] < e) {
            arr[i] = e;
            console.log(arr.join(' '));
            break;
        }


    }
}

main(); // execute program