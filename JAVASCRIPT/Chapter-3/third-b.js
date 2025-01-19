// Strings - IMMUTABLE

let str1 = "Vishal";
let str2 = 'Visanth';

let str1Len = str1.length;

console.log(str1[0]);

// Template literals 

let specialString = `This is a template literal`;

let obj = {
    item : "Pen",
    price : 10
};

console.log("The cost of", obj.item, "is", obj.price, "rupees only."); // 10 is number

// With Template literals

let output = `The cost of ${obj.item} is ${obj.price} rupees only.`; // 10 is a string
console.log(output);

// String Interpolation

/* To create strings by doing substitution of placeholders.

        `string text ${expression} string text.`
*/

// Escape characters 

// \n - next line, \t, length \n has one character value
console.log("HEllo\nWorld");

// String methods

let str = "Cambridge School"; 
console.log(str);
console.log(str.toUpperCase()); // Case 1
let str3 = str.toLowerCase();
console.log(str3);  // Case 2

str4 = "       Cambridge Matric Higher Secondary School    ";
str5 = str4.trim();

console.log(str5);

// Trims white space from front and back

// More methods

/*  str.slice(start, end?) - returns part of string
    str1.concat(str2) - joins string str1 with str2
    str.replace(searchVal, newVal)
    str.charAt( idx )
 */

console.log(str);
console.log(str.slice(0, 9));

let stra = "Cambridge ";
let strb = "School";

let res = stra.concat(strb);
console.log(res);

let res1 = stra + strb;
console.log(res1);

console.log(str.replace("C", "K"));
console.log(str.replace("bridge", "x"));

console.log(str5.replaceAll("a", "x"));

console.log(str.charAt(0));

console.log(str);
str = str.replaceAll("a", "x");
console.log(str);