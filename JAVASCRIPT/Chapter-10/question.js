/**
 * Qs1. You are creating a website for your college. Create a class User with two properties, name & email.
 *      It also has a method called viewData() that allows user to view website data.
 */

let data = "RAW Data";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }

    viewData() {
        console.log(data);
    }
}

let stud1 = new User("Venki", "venki333@gmail.com");
let stud2 = new User("Vijay", "vijay1789@gmail.com");

let staff1 = new User("Siva", "siva123@college.com");

// To view data 
stud1.viewData();
staff1.viewData();

/**
 * Qs2. Craete a new class called Admin whic inherits from User. Add a new method called 
 * editData() to Admin that allows it to edit website data.
 */

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data = "Data >> Information";
        console.log(data);
    }
}

let admin1 = new Admin("Admin1", "admin1@college.com"); 

// Editing data 
admin1.editData();