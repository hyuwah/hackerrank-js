function super_reduced_string(s) {
    // Complete this function
    let array_s = s.split('');
    for (let i = 1; i < array_s.length; i++) {

        if (array_s[i] === array_s[i - 1]) {
            array_s.splice(i - 1, 2);
            i = 0;
        }

    }
    return array_s.length == 0 ? 'Empty String' : array_s.join('')
}

function main() {
    //var s = readLine();
    var s = 'aaabccddd'; // override input
    var result = super_reduced_string(s);
    console.log(result);

}

main(); // execute program