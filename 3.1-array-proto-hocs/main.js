//Assignmemt 1
function compareArrays(arr1, arr2) {
    return arr1.length !== arr2.length ? false : arr1.every((currentValue, index) => currentValue === arr2[index]);
}

function sleep(milliseconds)
{
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function memorize(fn, limit) {
    let results = [];

    return function  () {
        let args1 = Array.from(arguments);
        let search = results.find(result => compareArrays(result.args, args1));

        if (search) {
            return search.result;
        }
        results.unshift({args: args1, result: fn(...args1)});

        if (results.length > limit) {
            results.splice(limit);
        }

        return results[0].result;
    }
}

const mSum = memorize(sum, 3);
console.log(mSum(3, 4));
console.log(mSum(1, 3));
console.log(mSum(3, 1, 3));
console.log(mSum(5, 4, 2));

console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));
