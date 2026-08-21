for (let i = 5; i >= 1; i--) {

    let pattern = "";

    // Spaces
    for (let j = 1; j < i; j++) {
        pattern = pattern + " ";
    }

    // Decreasing numbers
    for (let j = i; j <= 5; j++) {
        pattern = pattern + j;
    }

    // Increasing numbers
    for (let j = 4; j >= i; j--) {
        pattern = pattern + j;
    }

    console.log(pattern);
} 