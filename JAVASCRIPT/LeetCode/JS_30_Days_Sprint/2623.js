/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    const cache = new Map();    // Like vector in c++
    let callCount = 0;  // To count the no. of times the func is called. 

    const memoizedFn = function(...args) {
        const key = JSON.stringify(args);  // Used to create a unique key for the arguments 
        if(!cache.has(key)) {
            callCount++;    // Increment the no of time func called
            cache.set(key, fn(...args));    // Store the result in cache 
        }

        return cache.get(key);  // return the cached result
    };

    return memoizedFn; 

}

/**
 * Note:
 *  1.  Learnt how JSON.stringify() works by raeding mdn documentation.
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify  
 *  2. Learnt map()
 *      Which is same as vector used in c++
 */


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */