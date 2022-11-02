

class Laibery {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    
}


class User {
    constructor(fName, lName, adress) {
        this.fName = fName;
        this.lName = lName;
        this.adress = adress;
        this.books = [];
    }
    addBook(bookName) {
        this.books.push(bookName);
    }
}

class Book {
    constructor(bookName) {
        this.bookName = bookName;
    }
}




let laibery1 = new Laibery();
let laibery2 = new Laibery();


let user1 = new User('Yosi', 'Cohen', 'Ramat-Gan');
let user2 = new User('Ori', 'Levi', 'Bat-Yam');

let book1 = new Book('The House');
let book2 = new Book('The Beach');

laibery1.addUser(user1);
user1.addBook(book1);
console.log(JSON.stringify(laibery1));

laibery2.addUser(user2);
user2.addBook(book2);
console.log(JSON.stringify(laibery2));
