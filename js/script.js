// let fugure = 1;
// console.log(fugure);
// fugure = 2
// console.log(fugure);

// const result = confirm("are you OK?");
// const answer = prompt("How old are you?", " ");
// console.log(typeof(answer));

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };


// const a = prompt("Один из последних просмотренных фильмов?", " "),
//       b = prompt("На сколько оцените его?", " "),
//       c = prompt("Один из последних просмотренных фильмов?", " "),
//       d = prompt("На сколько оцените его?", " ");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// console.log(0 && null);
// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// for(let i = 1; i > 0; i++){
//     if(i % 2){
//         continue;
//     }else if(i === 10){
//         break;
//     }
//     console.log(i);
// }

// const length = 7;
// let result = '';

// for(let i = 1; i < length; i++){
//     for(let j = 0; j < i; j++){
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);


// for(let i = 20; i > 10; i--){
//     if(i === 13){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }  
// }

// let i = 2;
// while(i <= 16){
//     if(i % 2 == 0){
//         continue;
//     }else{
//         console.log(i);
//     }
//     i++
// }

// let j = 2;
// while(j < 16){
//     j++;
//     if(j % 2 == 0){
//         continue;
//     }else{
//         console.log(j);
//     }
// }

// const arrayOfNumbers = [];
// let arrayNumber = 5;
// for(let i = 0; i < 6; i++){
//     arrayOfNumbers[i] = arrayNumber;
//     arrayNumber++;
    
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i = 0; i<arr.length; i++){
//     result[i] = arr[i]
// }
// console.log(result)
// console.log(arr)

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i = 0; i < data.length; i++){
//     let value = data[i];
//     if(typeof(value) === 'number'){
//         data[i] = value * 2;
//     }else{
//         data[i] += ' done';
//     }
// }
// console.log(data)