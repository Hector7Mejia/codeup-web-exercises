(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: "Hector",
        lastName: "Mejia"
    };

    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return("Oh, hello! " + this.firstName + " " + this.lastName);
    };

    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320},
        {name: 'bob', amount: 120},
     ];

     shoppers.forEach(function (shoppers) {

         if (shoppers.amount <= 200) {
             console.log(shoppers.name + " will have to pay $" + shoppers.amount + " with no discount until total amount is over $200");
         }

         else {
            let discountedAmount = .88 * shoppers.amount
             console.log(shoppers.name + "'s original price was $" + shoppers.amount + " , and the discounted price is $" + discountedAmount);
         }
     });
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Zen and the Art of Motorcycle Maintenance",
            rating: "4.1",
            published: "1974",
            author: {
                firstName: "Robert",
                lastName: "Pirsig",
            }
        },
        {
            title: "Letters from a Stoic",
            rating: "3.8",
            published: "c. 65 AD",
            author: {
                firstName: "Lucius",
                lastName: "Seneca",
            }
        },
        {
            title: "Meditations",
            rating: "4.5",
            published: "161–180 CE",
            author: {
                firstName: "Marcus",
                lastName: "Aurelius",
            }
        },
        {
            title: "TDune",
            rating: "4.0",
            published: "1965",
            author: {
                firstName: "Frank",
                lastName: " Herbert",
            }
        },
        {
            title: "The Hitchhiker's Guide to the Galaxy",
            rating: "3.6",
            published: "1975",
            author: {
                firstName: "Douglas",
                lastName: "Adams",
            }
        }
    ];


    // books.forEach(functino (boo, index))
    //     console.log('Book # ' + index i)
    //     console.log()
    //     console.log()
    //
    // )

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


        books.forEach(function(books) {
            console.log("The the title of the book is " + books.title);
            console.log("The owner of the book is " + books.author.firstName + ".");
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
