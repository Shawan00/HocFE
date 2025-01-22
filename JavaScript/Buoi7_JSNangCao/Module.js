export function sum() {
    var t = 0;
    for (var x of arguments) {
        t += x;
    }
    return t;
}

function hieu(a, b) {
    return a - b;
}
export {hieu};

export var pi = 3.1416;