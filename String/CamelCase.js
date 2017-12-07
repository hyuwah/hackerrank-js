function main() {
    //var s = readLine();
    var s = 'saveChangesInTheEditor'; // override input

    let wordCount = 0;
    if (s[0] >= 'a' && s[0] <= 'z') {
        wordCount++;
    }
    s.split('').forEach(chars => {
        if (chars >= 'A' && chars <= 'Z') {
            wordCount++;
        }
    });
    console.log(wordCount);
}

main(); // execute program