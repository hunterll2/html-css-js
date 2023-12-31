/* ======================================== Session 11 ======================================== */

/* Exmaple 1 *
let textInput = document.querySelector("input[type='text']")

// 1 
textInput.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});

// 2
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}
textInput.addEventListener("keydown", logKey);

// 3
textInput.addEventListener("keydown", (event) => console.log(`You pressed "${event.key}".`));

/* Exmaple 2 *
function displayMessage() {
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = "This is a message box";
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
}

const btn = document.querySelector("button");
btn.addEventListener("click", displayMessage);

// Note: 
// You might be wondering why we haven't included the parentheses after the function name. 
// This is because we don't want to call the function immediately — only after the button has been clicked.
// The parentheses in this context are sometimes called the "function invocation operator". 
// You only use them when you want to run the function immediately in the current scope.

/* Example 2 - part 2 *

const btn = document.querySelector("button");
btn.addEventListener("click", () =>
  displayMessage("Woo, this is a different message!", "warning"),
);

// Note:
// If we want to specify parameters inside parentheses for the function we are calling, then we can't call it directly 
// — we need to put it inside an anonymous function so that it isn't in the immediate scope and therefore isn't called immediately. 

function displayMessage(msgText, msgType) {
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));

  if (msgType === "warning") {
    msg.style.backgroundImage = "url(/assets/warning.png)";
    msg.style.backgroundRepeat = "no-repeat";
    msg.style.paddingLeft = "46px";
    panel.style.backgroundColor = "#f44336";
    panel.style.padding = "8px 12px"
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(/assets/chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }
}

/* ======================================== Session 12 ======================================== */

/* Exanple 1 *
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  bio() {
    console.log(this)
    // console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name.first}.`);
  },
};

/* Example 2 *

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const ayed = new Person('name')
const abull = new Person('name')

console.log(ayed)

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const person1 = createPerson("ayed")
const person2 = createPerson("Abdullah")

/* ======================================== Session 13 ======================================== *

function Item(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;

  this.totalPrice = function () {
    return this.price * this.quantity
  }

  this.toString = function() {
    return `Item: ${this.name}\nPrice: ${this.price}$\tQuantity: ${this.quantity}\tTotal: ${this.totalPrice()}$`
  }
}

function Bill(items) {
  this.items = items
  this.GetTotal = function () {
    let total = 0;
    for (let item of this.items) {
      total += item.totalPrice()
    }
    return total
  }
  this.PrintBill = function() {
    for (let item of this.items) {
      console.log(item.toString())
    }
    console.log(`Total = ${this.GetTotal()}$`)
  }
}

const shoppingCart = []

shoppingCart.push(new Item("Bread", 1, 3))
shoppingCart.push(new Item("Banana", 6, 2))
shoppingCart.push(new Item("Apple", 9, 3))
shoppingCart.push(new Item("Juice", 3, 4))

const cusomterBill = new Bill(shoppingCart)

cusomterBill.PrintBill()

/* *

function Item(name, price, quantity) {
  this.name = name
  this.price = price
  this.quantity = quantity

  this.getTotalPrice = function() {
    return this.price * this.quantity
  }

  this.toString = function() {
    return `${this.name}\nPrice: ${this.price}$\tQuantity: ${this.quantity}\tTotal: ${this.getTotalPrice()}$`
  }
}

function Bill(items) {
  this.items = items
  this.getTotalPrice = function () {
    let total = 0
    for (let item of this.items) {
      total += item.getTotalPrice()
    }
    return total
  },
  this.printBill = function () {
    for (let item of this.items) {
      console.log(item.toString())
    }
    console.log(`Total = ${this.getTotalPrice()}$`)
  }
}

const shoppingCart = [new Item("Bread", 1, 2), new Item("Orange Juice", 4, 3), new Item("Apple Juice", 3, 5), new Item("Banna", 6, 2), new Item("Milk", 8, 1)]

let customer1Bill = new Bill(shoppingCart)

customer1Bill.printBill()

/* ======================================== Session 15 ======================================== *

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const setAlarmBtn = document.querySelector("input[type='submit']");
const resetAlarmBtn = document.querySelector("input[type='reset']");
const timer = document.querySelector("#timer");
const output = document.querySelector("#output");

const wakeUpMessage = "Wake up, %name%!"

let abortController = new AbortController()

function alarm(person, delay, signal) {
  let timeout
  // person = Math.floor(Math.random() * 100)

  return new Promise((resolve, reject) => {
    if (delay < 0)
      throw new Error("Alarm delay must not be negative");

    signal.addEventListener("abort", e => {
      clearTimeout(timeout)
      resolve()
    })

    timeout = setTimeout(() => {
      resolve(wakeUpMessage.replace("%name%", person));
    }, delay);
  });
}

let itnterval
async function callback() {
  clearInterval(itnterval)
  abortController = new AbortController()

  try {
    const delayInMs = delay.value * 60 * 1000;

    let ms = 0
    itnterval = setInterval(() => {
      const minutes = (Math.floor((ms / 60000)) % 60).toString().padStart(2, '0')
      const seconds = (Math.floor((ms / 1000)) % 60).toString().padStart(2, '0')
      const miliseconds = (Math.floor(ms / 16) % 60).toString().padStart(2, '0')
      timer.value = `${minutes}:${seconds}:${miliseconds}`
      ms++
    }, 1);

    const message = await alarm(name.value, delayInMs, abortController.signal);

    clearInterval(itnterval)

    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
}

setAlarmBtn.addEventListener("click", callback);

resetAlarmBtn.addEventListener("click", () => {
  abortController.abort()
  clearInterval(itnterval)
  output.textContent = ""
})

/* */

const form = document.querySelector("form")
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const setAlarmBtn = document.querySelector("input[type='submit']");
const resetAlarmBtn = document.querySelector("input[type='reset']");
const timer = document.querySelector("#timer");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, rejecte) => {
    if (delay < 0)
      throw new Error("Alarm delay must not be negative")

    setTimeout(() => {
      resolve(`Wake up, ${person}`)
    }, delay);
  })
}

async function callbackFun(e) {
  e.preventDefault();

  try {
    const delayInMs = delay.value * 60 * 1000

    let ms = 0
    const interval = setInterval(()=> {
      const seconds = (Math.floor(ms / 1000) % 60).toString().padStart(2, "0")
      const minutes = (Math.floor(ms / 60000) % 60).toString().padStart(2, "0")
      const miliseconds = (Math.floor(ms / 16) % 60).toString().padStart(2, "0")
      timer.value = `${minutes}:${seconds}:${miliseconds}`
      ms++
    }, 1)
    
    const message = await alarm(name.value, delayInMs)
    
    clearInterval(interval)

    output.textContent = message
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
}

form.addEventListener("submit", callbackFun)