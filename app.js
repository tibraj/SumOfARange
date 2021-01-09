document.getElementById('test').addEventListener('click', sum(range(1, 30)));

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = 0; i <= end; i += step) array.push(i);
    } else {
        for (let i = 0; i >= end; i += step) array.push(i)
    }
    return array;
}