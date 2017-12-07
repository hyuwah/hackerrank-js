function main() {

    var input = '4\n6\n1 4 5 7 9 12';

    let V = input.split('\n')[0];
    let arr = input.split('\n')[2].split(' ');
    //Enter your code here
    let i = 0;
    let Vi = -1;
    arr.forEach(item => {
        if (item === V) {
            Vi = i
        } else {
            i++
        }
    });

    console.log(Vi)
}

main(); // execute program