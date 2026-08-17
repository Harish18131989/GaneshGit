let mark = 28;

if (mark >= 90) {
    console.log("candidate secured good marks");

    if (mark > 95) {
        console.log("candidate secured distinction");
    }
}

else if (mark > 80) {
    console.log("candidate secured above 80");
}
else if (mark > 70) {
    console.log("candidate secured above 70");
}
else if (mark > 60) {
    console.log("candidate secured above 60");
}
else {
    if (mark > 45) {
        console.log("candidate has secured pass mark");
    }
    else {
        if (mark < 40) {
            console.log("candidate has failed  badly");

            if (mark < 30) {
                console.log("candidate and his parents are requested to meet HM");
            }
        }
    }
}