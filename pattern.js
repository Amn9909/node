for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= 1; j--) {
        if (i == j) {
            let start = '*'
            console.log((start).repeat(i))
            break;
        }
    }
}