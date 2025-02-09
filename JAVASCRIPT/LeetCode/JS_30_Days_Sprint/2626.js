/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    if (nums.length > 0){
        let val = 0;
        for (let i = 0; i < nums.length; ++i){
            val = fn(init,nums[i]);
            init = val;
        }
        return val;
    } else {
        return init;
    }
};

/**
 * Personal note :
 *  Really got very consfused where to use which variable.
 *  Got a lot of unexpected results. 
 */