function main() {

    var input = '5\n4 5 3 7 2';

    //Enter your code here
    let array = input.split('\n')[1].split(' ');
    let p = array[0];
    let left = [];
    let right = [];
    array.forEach(num => {
        //console.log(num+' & '+p)
        if (parseInt(num) < parseInt(p)) {
            left.push(num)
        } else {
            right.push(num)
        }
    })
    //console.log(p);
    //console.log(left)
    //console.log(right)
    console.log(left.join(' ') + ' ' + right.join(' '))
}

main(); // execute program