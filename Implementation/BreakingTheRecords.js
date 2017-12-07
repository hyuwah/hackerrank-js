function getRecord(s) {
    // Complete this function
    let highestScore = s[0];
    let lowestScore = s[0];
    let hicnt = 0;
    let locnt = 0;
    s.forEach(score => {
        if (highestScore < score) {
            highestScore = score;
            hicnt++;
        }
        if (lowestScore > score) {
            lowestScore = score;
            locnt++;
        }
    });

    return hicnt + ' ' + locnt;
}

function main() {
    //     var n = parseInt(readLine());
    //     s = readLine().split(' ');
    //     s = s.map(Number);
    var s = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // override input
    var result = getRecord(s);
    console.log(result)

}

main(); // execute program