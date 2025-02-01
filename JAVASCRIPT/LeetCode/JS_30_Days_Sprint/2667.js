// Method - 1 

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Method - 2

/**
 * @return {Function}
 */
const createHelloWorld = () => () => "Hello World";

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */