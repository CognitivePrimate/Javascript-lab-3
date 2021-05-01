function createRange(start, end){
    let range = [];
    for (let i = start; i <= end; i++)
    range.push(i);
    return range;
}


function countElements(array){
    let count = {};
    array.forEach(function(i) {
        count[i] = (count[i] || 0) + 1;
    });
    return count;
}




// console.log(createRange(5, 13));
console.log(countElements(["a", "b", "c", "d", "c", "a"]));
