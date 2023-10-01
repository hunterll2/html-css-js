# HTML

- [x] What is HTML?
- [x] HTML Elements & Attributes
- [x] Basic HTML Elements
  - [ ] <!DOCTYPE>
  - [-] Head
    - [ ] title
    - [ ] meta
    - [ ] link
    - [ ] script
    - [ ] style
  - [x] Body
    - [ ] Headings
    - [ ] Paragraphs
    - [ ] Links
    - [ ] Images
    - [ ] Block & Inline elements
    - [ ] Formatting Elements
    - [ ] Tables
    - [ ] List
- [x] Comment Tag
- [x] Class & Id
- [ ] File Paths
- [x] HTML Forms
  - [ ] The \<input> Element
    - [ ] text
    - [ ] Number
    - [ ] Email
    - [ ] radio
    - [ ] checkbox
    - [ ] button
    - [ ] Date
    - [ ] Month
    - [ ] Time
    - [ ] Datetime-local
    - [ ] File
    - [ ] submit
    - [ ] Reset
  - [ ] Input Restrictions
  - [ ] label
  - [ ] select
    - [ ] size
    - [ ] multiple
  - [ ] textarea
  - [ ] \<fieldset> and \<legend>
  - [ ] Form Attributes
    - [ ] action
    - [ ] target
    - [ ] Method
    - [ ] Autocomplete
    - [ ] Novalidate
- [ ] HTML Multimedia
  - [ ] \<video> element
  - [ ] \<audio> element
  - [ ] Iframes
  - [ ] YouTube with iframe

- You can create sections on a webpage and jump to them using `<a>` tags and adding ids to the elements you wish to jump to.


## CSS

- the id problem
- [ ] What is CSS?
- [ ] CSS Demo
- [ ] CSS Syntax
- [ ] CSS Selectors
  - [ ] Elements
  - [ ] Classes
  - [ ] Ids
  - [ ] Attribute
  - [ ] CSS Specificity
  - [ ] The !important Rule
- [ ] How To Add CSS
- [ ] Comments
- [ ] Colors
- [ ] Backgrounds & Opacity / Transparency
- [ ] Box Model
  - [ ] Borders
  - [ ] Margins & Padding
  - [ ] Height, Width and Max-width
  - [ ] Outline
- [ ] CSS Text
  - [ ] Color
  - [ ] Alignment
  - [ ] Decoration
  - [ ] Transformation
  - [ ] Spaceing
  - [ ] Shadow
- [ ] Fonts
  - [ ] Font Families
  - [ ] Fallback Fonts & Web Safe
  - [ ] Font Style and size
  - [ ] Google Fonts
  - [ ] Font property shorthand
- [ ] CSS Icons
- [ ] CSS Links & Links states
- [ ] CSS Lists
- [ ] CSS Tables
- [ ] CSS Layout
  - [ ] The display Property
  - [ ] width and max-width
  - [ ] The position Property
  - [ ] The z-index Property
  - [ ] Overflow
  - [ ] float and clear
  - [ ] inline-block
  - [ ] Horizontal & Vertical Align
- [ ] Pseudo-classes & Pseudo-elements
- [ ] CSS Units

## JavaScript

- What is JS
- How to add?
- JavaScript Statements
  - [ ] JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.
  - [ ] Semicolons
  - [ ] Keywords
    - var, let, const, if, switch, for, function, return
- [ ] Syntax
- [ ] Varaibles
  - [ ] var, let, const
  - [ ] The nameing rules
- [ ] Data Types
  - [ ] String
  - [ ] Number
  - [ ] Bigint
  - [ ] Boolean
  - [ ] Undefined
  - [ ] Null
  - [ ] Symbol
  - [ ] Object
  - The Object Datatype
    - [ ] An object
    - [ ] An array
    - [ ] A date
  - [ ] typeof Operator
  - [ ] the Undefined & null
- [ ] Operators
  - [ ] Arithmetic Operators
  - [ ] Assignment Operators
  - [ ] Comparison Operators
  - [ ] String Operators
  - [ ] Logical Operators
  - [ ] Bitwise Operators
  - [ ] Ternary Operators
  - [ ] Type Operators
- [ ] Comments
- [ ] Case Sensitive
- [ ] Variables Names
  - [ ] Hyphens
  - [ ] Underscore
  - [ ] Upper Camel Case
  - [ ] Lower Camel Case
- [ ] let, const and Block Scope
- [ ] JavaScript Functions
- [ ] Objects, Properties, and Methods
- [ ] JavaScript Events
- [ ] JavaScript Strings
  - [ ] String Methods
  - [ ] String Search
  - [ ] Template Literals
- [ ] JavaScript Numbers
  - [ ] Basic points
  - [ ] Number Methods
- [ ] JavaScript Arrays
  - [ ] Basics Points
  - [ ] Array Methods
  - [ ] Sorting Arrays
  - [ ] Array Iteration
- [ ] Date
  - [ ] Date Objects
  - [ ] Date Formats
  - [ ] Get Date Methods
  - [ ] Set Date Methods
- [ ] Math Object
- [ ] JavaScript Booleans
- [ ] Comparison and Logical Operators
- [ ] JavaScript if, else, and else if
- [ ] Switch Statement
- [ ] Loops
  - [ ] For Loop
  - [ ] For In
  - [ ] For Of
  - [ ] While Loop
  - [ ] Break and Continue
  - [ ] JavaScript Iterables
- [ ] JavaScript Maps
- [ ] Type Conversion
- [ ] Operator Precedence
- [ ] JavaScript Errors
- [ ] JavaScript Scope
- [ ] "this" Keyword
- [ ] Arrow Function
- [ ] JavaScript Classes
- [ ] JavaScript Modules

## Resources 

- CMD
- HTTPS
- Git
- NPM
- Node.js

- Vue.js
- Firebase
- Bootstrap
- Fontawasom

## Install resources

1. Install nodejs, npm, git
2. Create vue app
3. Run and commit
4. Clear vue project
5. Run and commit
6. Create Github account and publish branch
7. Include bootstrap, fontawasom
8. Include firebase

### 

## Points

- [x] events
- [x] modules
- [x] promises
- [-] try catch
- [ ] Errors
- [x] flexbox
  - [ ] [a guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [ ] grid
  - [ ] [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [x] data-
  - [ ] [Use data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [x] query string
  - [ ] [URL Parameter](https://www.semrush.com/blog/url-parameters/)
  - [ ] [URLSearchParams](https://medium.com/swlh/urlsearchparams-in-javascript-df524f705317)
- [x] [absolute vs relative path](https://www.w3schools.com/html/html_filepaths.asp)
- [ ] by value & by ref
  - [ ] [JS Copy an Object – How to Clone an Obj in JavaScript](https://www.freecodecamp.org/news/clone-an-object-in-javascript/)


```js
// ex1
let num1 = 70
let num2 = num1

console.log(num1) // 70
console.log(num2) // 70

num1 = 40

console.log(num1) // 40
console.log(num2) // 70

// ex2
let obj1 = {website: "Scaler Academy"}
let obj2 = obj1;

console.log(obj1)     // {website: "Scaler Academy"}
console.log(obj2)     // {website: "Scaler Academy"}

obj1.website = "Scaler Topics"

console.log(obj1)     // {website: "Scaler Topics"}
console.log(obj2)     // {website: "Scaler Topics"}
```