function solve(grades) {
    // Complete this function
    var newGrades = [];
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            if (grades[i] % 5 >= 3) {
                newGrades.push(grades[i] - (grades[i] % 5) + 5);
            } else {
                newGrades.push(grades[i]);
            }
        } else {
            newGrades.push(grades[i]);
        }

    }
    return newGrades;
}

function main() {
    //     var n = parseInt(readLine());
    //     var grades = [];
    //     for(var grades_i = 0; grades_i < n; grades_i++){
    //        grades[grades_i] = parseInt(readLine());
    //     }
    var grades = [73, 67, 38, 33]; // override input
    var result = solve(grades);
    console.log(result.join("\n"));



}

main(); // execute program