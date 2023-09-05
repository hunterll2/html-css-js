/*
1.  Generate a random number between 1 and 100.
2.  Record the turn number the player is on. Start it on 1.
3.  Provide the player with a way to guess what the number is.
4.  Once a guess has been submitted, first record it somewhere so the user can see their previous guesses.
5.  Next, check whether it is the correct number.
6.  If it is correct:
    1.  Display congratulations message.
    2.  Stop the player from being able to enter more guesses.
7.  If it is wrong, and the player has turns left:
    1.  Tell the player they are wrong and whether their guess was too high or too low.
    2.  Allow them to enter another guess.
    3.  Increment the turn number by 1.
8.  If it is wrong, and the player has no turns left:
    1.  Tell the player it is game over.
    2.  Stop the player from being able to enter more guesses.
9.  Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
*/

const max_turn = 10
let random_number = Math.floor(Math.random() * 100)
let user_turn = 1

const form = document.getElementById("form")
const div_message = document.getElementById("div_message")
const div_hint = document.getElementById("div_hint")
const span_guess_records = document.getElementById("span_guess_records")
const btn_start_over = document.getElementById("btn_start_over")

console.log(random_number)

form.addEventListener("submit", function (event) {
    let guess_number = Number(form["user_guess"].value)

    if (span_guess_records.textContent === "") {
        span_guess_records.textContent = guess_number
    } else {
        span_guess_records.textContent = span_guess_records.textContent + "," + guess_number
    }

    if (guess_number === random_number) {
        div_message.textContent = "Congratulations! You got it right!"
        div_message.classList.remove("wrong")
        div_message.classList.add("correct")

        form["user_guess"].disabled = true
        form["submit_guess"].disabled = true

        div_hint.textContent = ""
    } else if (user_turn < max_turn) {
        div_message.textContent = "Wrong!"
        div_message.classList.remove("correct")
        div_message.classList.add("wrong")

        if (guess_number > random_number) {
            div_hint.textContent = "High"
        } else {
            div_hint.textContent = "Low"
        }

        user_turn = user_turn + 1
    } else {
        div_message.textContent = "Game Over!"
        form["user_guess"].disabled = true
        form["submit_guess"].disabled = true

        div_hint.textContent = ""
    }

    event.preventDefault();
})

btn_start_over.addEventListener("click", function (e) {
    random_number = Math.floor(Math.random() * 100)
    user_turn = 1


    form["user_guess"].value = 1
    form["user_guess"].disabled = false
    form["submit_guess"].disabled = false

    div_message.textContent = ""
    div_message.classList.remove("correct")
    div_message.classList.remove("wrong")

    div_hint.textContent = ""

    span_guess_records.textContent = ""
})