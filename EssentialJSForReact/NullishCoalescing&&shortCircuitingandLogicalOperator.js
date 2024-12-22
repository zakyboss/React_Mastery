
"use strict";
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
let book = getBook(2)

// Ternary operator has 3 parts 
//   1. The expression being run to see if true 
//   2. The code to execute if true 
//   3.The code to execute if false 
console.log(book)
console.log(book.pages>200?'I am more than those pages':'I am less than those pages ')
let updatedBook = {...book, moviePublicationDate:'2001-12-19'};
const summary =`The movie by the title ${updatedBook.title} is a book by ${updatedBook.author} and has ${updatedBook.pages} and released on date ${updatedBook.moviePublicationDate} and the book has ${updatedBook.hasMovieAdaptation?'a':'no'} movie adaption and translation status is ${updatedBook.translations.spanish || 'Has no translation'}`
// console.log(summary)


    //  And  && Operator
        //  If the value is true the next value is returned
// console.log(true &&'someString');    // => someString is returned;
// console.log(false &&'someString');    // => false is returned;


        //    example 
console.log(updatedBook.hasMovieAdaptation && 'This book has a movie')
                    //  And  && Operator => short circuits when it encounters a false value 

            // Falsy values are 0 , null , undefined
            // console.log('Zakyboss' && 'Some other name ')
      console.log(undefined && 'This will not  be printed')
      console.log(false && 'This will not  be printed')
      console.log(0 && 'This will not  be printed')
      console.log(null && 'This will not  be printed')

           // OR OPERATOR 
// Short Circuits whenever it encounters true 
console.log(undefined ||0 ||'This will be  be printed')
console.log(false||0 || 'This will be  be printed')
console.log(0 ||false|| 'This will not  be printed')
console.log(null ||0||false|| 'This will be  be printed')


                // Or Operator can be used to set default value 

console.log(updatedBook.translations.spanish)  //=> returns spanish 
// Lets say we wanted to set spanish translation or not translated
    //  The updatedBook object now has a spanish traslated or default set to no translations 
console.log(summary)

// Using OR operator can Go Wrong when for example the value is Zero 

const countWrong = updatedBook.reviews.librarything.reviewsCount ||'no data';
console.log(countWrong)  // For Book 2 the data Says no data yet we know there is data but its just 0 (zero) which is a falsy value hence the other value is used
                           // To get the correct value we can use a new addition to JS called Nullish Coalescing 
                                    // **********Nullish Coalescing (??) **********
const countRight = updatedBook.reviews.librarything.reviewsCount ?? 'No data';
console.log(countRight)
