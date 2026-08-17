function easeInQuad(x) {
    return x * x;
}

function easeOutQuad(x) {
    return 1 - (1-x) * (1-x);
}

function easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
}

function easeInCubic(x) {
    return x * x * x;
}

function easeOutCubic(x) {
    return 1 - pow(1-x, 3);
}