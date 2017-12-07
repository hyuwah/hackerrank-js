function timeConversion(s) {
    // Complete this function
    var s24;
    if (s.includes("PM")) {
        s24 = s.replace("PM", "");
        var hh = (parseInt(s.substring(0, 2)) + 12).toString();
        if (hh == 24) hh = '12';
        s24 = s24.replace(s24.substring(0, 2), hh);

    }

    if (s.includes("AM")) {
        s24 = s.replace("AM", "");
        var hh = s.substring(0, 2);
        if (hh == 12) hh = '00';
        s24 = s24.replace(s24.substring(0, 2), hh);
    }
    return s24;
}

function main() {
    //var s = readLine();
    var s = '07:05:45PM'; // override input
    var result = timeConversion(s);
    console.log(result);

}

main(); // execute program