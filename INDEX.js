// Exercise 1
// Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased. Create three different methods to change each attribute. Outside of the class create two different Movie objects, assign values to each object, and print them to the console.

class Movie {
    constructor(movieName, Rating, Year){
        this.movieName = movieName;
        this.Rating = Rating;
        this.Year = Year;
    }
    changeName(newMovie){
        this.movieName = newMovie;
    }
    changeRating(newRating){
        this.Rating = newRating;
    }
    changeYear(newYear){
        this.Year = newYear;
    }
}
let Movie1 = new Movie("To Heos", 2, 2011);
let Movie2 = new Movie("A Silent Voice", 9.7, 2018);
console.log(Movie1);
console.log(Movie2);
Movie1.changeName("Two Heroes");
Movie1.changeRating(9);
Movie1.changeYear(2018);
console.log(Movie1);

//     Exercise 2
// Create a class Product that represents a product sold online. A product has a price, quantity and name.
//     The class should have:
//     A constructor to hold the values.
//     A method printProduct() that prints a product in the following form: Banana, price 1.1, amount 13

class Product {
    constructor(Item, Price,Amount){
        this.item = Item;
        this.price = "Price " + Price;
        this.amount = "Amount " + Amount;
    }
}