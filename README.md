# html-css-js

## How to open the project

1. افتح برنامج visual studio code
2. ثبت الاضافة "Live Server"
3. افتح الملف "index.html"
4. بتلقى في اسفل اليمين زر اسمه "Go Live" اضغط عليه وبيفتح لك الموقع

## Session 3 - Introduction to css

Video Link: https://youtu.be/tVFRQxQAQ9w

Headline:

- CSS Syntax
- Applying CSS to HTML
- Selectors
- Cascade, specificity, and inheritance

## Session 4 - Box Modal

Video Link: https://youtu.be/Ziiss33ukl8

- CSS Box modal

## Session 5 - CSS Common Properties

Video Link: https://youtu.be/Fj7vsG_PvK4

- CSS Colors
- CSS Units
- Height, Width and Overflow
- Margins, padding, and borders
- Backgrounds
- CSS Text
- CSS Fonts
- CSS Lists
- Position and float Properties

## Session 6 - An Example of an HTML Form

Video Link: https://youtu.be/Aj0LZUMOGOg

- Survey form in HTML

## Session 7 - Introduction to JS

Video Link: https://youtu.be/iPg0z7rlbTc

- General Points about JS
- An example of using JS with HTML (Guess the number game)

## Session 8 - Varaibles, Numbers and Strings

Video Link: https://youtu.be/DVZcQwFGjgw

- Varaibles
- Numbers
- Strings

## Session 9 - String Methods and Arrays

Video Link: https://youtu.be/6IieczdJdiU

- String methods
- Arrays
- Arrays methods

Note: See the [javascript](https://github.com/hunterll2/html-css-js/tree/main/javascript) folder for the complete explanation

## Session 10 - Conditions & Loops

Video Link: https://youtu.be/CdiYBEO9rdE

- Conditionals Statements
- Loops Statements

## Session 11 - Functions

Video Link: https://youtu.be/8rzn6qaBmG8

- Functions

## Session 12 - Objects

Video Link: https://youtu.be/HFomG1Y3Bec

- Objects

## Session 13 - Objects prototypes

Video Link: https://youtu.be/8kspoc4ond0

- Objects prototypes

## Session 14 - Events, modules

Video Link: https://youtu.be/FKWD_yfax_A

- DOM events
- JS Modules

## Session 15 - Synchronous vs. Asynchronous Programming

Video Link: https://youtu.be/4Y6Ab66Q_qg

- Introducing asynchronous JavaScript
- Promises and Fetch API
- Async and Await

## Session 16 - Misc.

Video Link: https://youtu.be/bFNSL_3H_vs

- Continue working on Alram example
- CSS Flexbox
- HTML "data-*" attribute
- Query String (?name="Value")

## Session 17 - Start the Project

Video Link: https://youtu.be/0dyOAD5lDCw

- Overview over most basic web technologies
  - HTTPS
  - Git
  - NPM
  - Node.js
  - Vue.js
  - Firebase
  - Bootstrap
  - Fontawasom
- Install: `Node.js`, `git`
- **Create Vue App**
    - `npm create vue@latest`
- Use the VSCode `Source Control` Helper and link it with `Github`

## Session 18

Video Link: https://www.youtube.com/watch?v=eCBrGjObUVo

- [ ] Add Bootstrap, FontAwasom
- [ ] Create Firebase account
- [ ] Link with Firebase
- [ ] The idea of App.vue and why we use vue for this course
- [ ] Create the App strcture

## Session 19

Video Link: https://youtu.be/Lr958o8EsgU

- Complete the app.vue html/css strcuture
- Some overview about bootsrap classes
- app.vue functions
  - by default hide "admin" elements
  - show current active page

## Session 20

Video Link: https://youtu.be/tuwr46X_9Pg

- sidebar breakpoint problem
- navbar style
- use icons in menu, btn
- Sign Page
  - html/css strcuture
  - change between sign in/up btn
  - submit event
  - sign in/up functions

## Session 21

Video Link: https://youtu.be/xyWQLgUwO-g

- Complete SignPage
- Use Firebase `Auth`

## Session 22

Video Link: https://youtu.be/o_cpKZInN78

- make sure unsigned users redirected to sign page
- add the admin users logic
- admin pages
  - projects
  - project
  - users
- public pages
  - Home
- Update the router

PMS Repsitory => https://github.com/hunterll2/pms

## Session 23

Video Link: https://youtu.be/n8P7K51itQA

- when user create an account, create document on users collection
- Users Page
  - load users
  - add setAdmin/setUser event
- App
  - user email displayed on navbar

##  Session 24

Video Link: https://youtu.be/KeRlD0_8buo

- brief preview over firestore methods
- IsAdmin => isAdmin
- loading helper
- complete the admin/users page
- admin/projects
  - load projects
  - add project
  - delete

# Session 25

- admin/project page
  - change some small details on html
    - form id
    - input names
    - uplaod table
    - alert
    - back btn
  - load project
  - update project
  - [on_hold] documents uploads
- Home
  - load projects
  - use placeholders

# Session 26

Video Link: https://youtu.be/RyKxdEn21xI

- admin/project
  - add `firebase storage` into the project
  - change some small details on html
    - the upload btn must have "type" attribute and "id"
    - progress bar under upload control
    - tbody_documents_parentNode
  - import `storage` from plugins and: `ref, uploadBytes, uploadBytesResumable, getDownloadURL, listAll, deleteObject` from firebase/storage
  - change loadPorject to bindProject
  - put `window.loading` before and after getting project data
  - create helpers functions:
    - loadProjectDocuments
    - uploadDocument
    - deleteDocument
  - load project documents when page mounted
  - handle document delation
  - handle document uploading
- App.vue
  - add loading status message

## Session 27

Video Link: https://youtu.be/8Tu5akF54tY

- admin/project
  - image upload
- Home
  - change `auto` to `100%`
  - use project image
- app.vue
  - redirect user that hasn't verified his email to verify_email page
- SignPage
  - send verifiection link when an account created
- VerifyEmail page

## Session 28

Video Link: https://youtu.be/DJLTwlgVHGo

- project page
  - html template
  - `SignProjectContract` function
  - start using custom `helpers`

# Session 29

Video Link: https://youtu.be/G0Yj3ktrf9o

- Project
  - small edit on html
  - create `InsertChildrenIntoParentElement` helpers function
  - check if user already sign the contract
  - create `BindProjectContractDetails`
  - create `SetProjectStatus`
- helpers/firestore
  - `if (!snapshot.exists()) return null`
  - `GetDocs`

# Session 30

Video Link: https://youtu.be/76afJkCspAo

- Project
  - `BindProjectBillsDetails`
  - change html
    - use hidden input inside pyment form
    - remove pay button from bills table
  - use GetDateString and GetCurrency
  - remove the `toFixed` when creating a bill
  - handle the `bill payment` form submit event
- helpers/common
  - `GetCurrency`

# Session 31

Video Link 1: https://youtu.be/q42kg2nTxU0
Video Link 2: https://youtu.be/-BUzfXjwlt0

(فيه جزئين لاني وقفت التسجيل ولما رجعت اضغط على استكمال ضغطت على انهاء التسجيل بالغلط)

- hide Admin sidebar menu by default
- Project
  - enahance the late bill payment form style
  - set loading messages
  - make status progress bar width 5% by deafult
  - Credit Card payment modal
  - `late bill Payment form` display the `credit Card Payment form`
  - `credit Card Payment form` submit
- user/projects
  - add into router
  - add html
  - get user projects
  - load user projects
  - create and use `GetProjectBills` and `GetBillsStats`
- helpers/DOM
  - in `InsertChildrenIntoParentElement` use async

## Session 32

Video Link: https://youtu.be/fwYlMpjQxz8

- Placeholders functionality
  - `App.vue`
  - `Project`
  - `user/Projects` 
- `Home`: correct image long loading problem
- `admin/Project`
  - if user update the project data without select an image, the old image will be lost
  - display current project image
  - upload file progress doesn't work

