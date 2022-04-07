/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokite ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        if(this.budget > 1000000000) {
            return true;
        }
        else {
            return false;
        }
    }
}


const firstMovie = new Movie("StarWars", "George Lucas", 3300000000);
const movieBudget = firstMovie.wasExpensive();
console.log('movieBudget ===', movieBudget);