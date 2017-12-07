function main() {
    //     var n = parseInt(readLine());
    //     var s = readLine();
    //     var k = parseInt(readLine());
    var n = 11; // override input
    var s = 'middle-Outz'; // override input
    var k = 2; // override input

    let encrypted_s = [];
    s.split('').forEach(chars => {
        if ((chars >= 'A' && chars <= 'Z') || (chars >= 'a' && chars <= 'z')) {
            let floor = chars > 'Z' ? 'a'.charCodeAt() : 'A'.charCodeAt();
            let newAscii = (((chars.charCodeAt() - floor) + k) % 26) + floor;
            encrypted_s.push(String.fromCharCode(newAscii));
        } else {
            encrypted_s.push(chars);
        }
    });

    console.log(encrypted_s.join(''))

}

main(); // execute program