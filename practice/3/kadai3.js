function expone(x, n) {
    if (n == 0) {
        return x;
    } else {
        return expone(x+n*n, n - 1);
    }
}

console.log( expone(0, 100) );