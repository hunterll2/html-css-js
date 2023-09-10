// let x_global = 10
// function testFucntion() {
//     let y_local = 20

// }

// if (1 + 1 === 2) {
//     var global_scop = 50
//     let z_block_scoop = 30
// }

// console.log(z_block_scoop)
/*
let two = 10

two = "some text"
const one = 10

const x = [1, 2, 3]
x.push(4)

const y = { name: "ayed" }

y.name = "abulrham"


function somefun() {

}
somefun()

if (true) {

}

//

let x2 = 10, y2 = '10';
if (x2 == y2) {

}
*/

/*  */

// const list = document.querySelector('ul');
// list.innerHTML = '';
// const greetings = ['Happy Birthday!',
//                  'Merry Christmas my love',
//                  'A happy Christmas to all the family',
//                  'You\'re all I want for Christmas',
//                  'Get well soon'];

// for (const greeting of greetings) {
//   // Your conditional test needs to go inside the parentheses
//   // in the line below, replacing what's currently there
//   if (greeting.includes("Christmas")) {
//     const listItem = document.createElement('li');
//     listItem.textContent = greeting;
//     list.appendChild(listItem);
//   }
// }

// ex2

// const list = document.querySelector('ul');
// list.innerHTML = '';
// const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

// for (const city of cities) {
//   // write your code just below here
//   const lower = city.toLowerCase()
//   const result = lower[0].toUpperCase() + lower.slice(1);
//   const listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }


// ex3

// const list = document.querySelector('ul');
// list.innerHTML = '';
// const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for (const station of stations) {
//     // write your code just below here
//     const code = station.slice(0, 3)
//     const name = station.slice(station.indexOf(";") + 1)
//     const result = code + ": " + name;
//     // stationsFormated.push(result)
//     //   const listItem = document.createElement('li');
//     //   listItem.textContent = result;
//     //   list.appendChild(listItem);
// }

// const stationsFormated = stations.map(doFormat)

// function doFormat(station) {
//     const code = station.slice(0, 3)
//     const name = station.slice(station.indexOf(";") + 1)
//     const result = code + ": " + name;
//     return result;
// }

// console.log(stationsFormated)

// ex4

// function isLong(city) {
//     return city.length > 8;
//   }
//   const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
//   const longer = cities.filter(isLong);
//   console.log(longer); // [ "Liverpool", "Edinburgh" ]

// ex5

// const list = document.querySelector('ul');
// const totalBox = document.querySelector('p');
// let total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';
// // number 1
// const products = ['Underpants:6.99',
//     'Socks:5.99',
//     'T-shirt:14.99',
//     'Trousers:31.99',
//     'Shoes:23.99'];

// // number 2
// for (const product of products) {
//     const name = product.split(":")[0]
//     const price = Number(product.split(":")[1])
//     total += price

//     let itemText = `${name} — $${price}`;

//     const listItem = document.createElement('li');
//     listItem.textContent = itemText;
//     list.appendChild(listItem);
// }


// // number 6

// totalBox.textContent = 'Total: $' + total.toFixed(2);

// ex6

// const list = document.querySelector('ul');
// const searchInput = document.querySelector('input');
// const searchBtn = document.querySelector('button');

// list.innerHTML = '';

// const myHistory = [];
// const MAX_HISTORY = 5;

// searchBtn.onclick = () => {
//   // we will only allow a term to be entered if the search input isn't empty
//   if (searchInput.value !== '') {
//     // number 1
//     myHistory.unshift(searchInput.value)

//     // empty the list so that we don't display duplicate entries
//     // the display is regenerated every time a search term is entered.
//     list.innerHTML = '';

//     // loop through the array, and display all the search terms in the list
//     for (const itemText of myHistory) {
//       const listItem = document.createElement('li');
//       listItem.textContent = itemText;
//       list.appendChild(listItem);
//     }

//     // If the array length is 5 or more, remove the oldest search term
//     if (myHistory.length >= MAX_HISTORY) {
//       // number 2
//         myHistory.pop()
//     }

//     // empty the search input and focus it, ready for the next term to be entered
//     searchInput.value = '';
//     searchInput.focus();
//   }
// }


/* */

const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const num = input.value;
  for (let i = 1; i <= num; i++) {
    if (i !== 25 && i !== 50 && i !== 75 && i !== 100) {
      console.log("skip")
      continue;
    }
    console.log(i)
  }
});