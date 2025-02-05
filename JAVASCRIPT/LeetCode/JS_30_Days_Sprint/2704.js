/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const originalVal = val;
    return {
        toBe : function(newVal) {
            if (newVal !== originalVal) {
                throw new Error("Not Equal");
            } else return true; },
        notToBe: function(newVal) {
            if (newVal === originalVal) {
                throw new Error("Equal");
            } else return true; 
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

/* Note:
 *  I didn't know that we can return multiple leveled functions 
 * inside the return functions itself.
 */