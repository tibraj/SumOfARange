document.getElementById('test').addEventListener('click', sumOfRange);

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = 0; i <= end; i += step) array.push(i);
    } else {
        for (let i = 0; i >= end; i += step) array.push(i)
    }
    return array;
}

function sum(array) {
    let total = 0;
    for(let value of array) {
        total += value;
    }
    return total;
}

function sumOfRange() {
    console.log(sum(range(1, 30)));
}