
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
// console.log(data);

/// 1 ***********Destructuring  Objects
// exampe we wanted to remove title we can 
// example book 2 = 
let book = getBook(2);
// let title = book2.title;
// console.log(title,book2.author)
// this will take long since we have select each attribute and initialize to a variable 
// SO WE OPT FOR *****OBJECT DESTRUCTURING*******
// let {title , author , pages,publicationDate} = book2;
// console.log(title)
// console.log(author)
// console.log(pages)
// console.log(publicationDate)

// NB- the order Doesnt matter 

        //  2.Array
        let {genres} =book;
        // console.log(genres)
          // We can get The genres out one by one using arrayss 
        //   let [primaryGenre , secondaryGenre]=genres
        //   // console.log(primaryGenre)
        //   console.log(secondaryGenre)


            //    Assuming that we wanted to get the rest of the remaining genres into an array we can use 
            //          *********Rest operator********
            // let [primaryGenre , secondaryGenre, ...otherGenre]=genres
            // console.log(primaryGenre)
            // console.log(otherGenre)
   // NB Rest Operator must be the last 



            // ********Spread Operator ********
                // Spread On Array 
// Lets say we wanted to create a new array containing all genres plus a new one 
let currentGenre = [...genres, 'Epic Fantasy'];
// console.log(currentGenre) 
        //  ********Spread Operator on Object **************
        // lets say we wanted to keep all properties and add new attribure 
        const updatedBook = {...book , moviePublicationDate:'2001-12-19'};
        console.log(updatedBook.pages)
