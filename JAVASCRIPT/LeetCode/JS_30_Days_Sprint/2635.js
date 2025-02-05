/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const transformedArr = [];
    let idx = 0;
    for(const el of arr) {
        transformedArr[idx] = fn(el, idx);
        idx++;
    }
    return transformedArr;
};