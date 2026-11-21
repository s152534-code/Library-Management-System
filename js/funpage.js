// These are the six books used in the game.
var gameBooks = [
    {title: "Foundations of Web Design", category: "Computing", cover: "web.svg",
        clue: "Learn how to build and arrange web pages."},
    {title: "Java Programming Essentials", category: "Computing", cover: "java.svg",
        clue: "Practice writing programs with objects and arrays."},
    {title: "A Practical Guide to Databases", category: "Computing", cover: "databases.svg",
        clue: "Learn how tables, keys and stored records work."},
    {title: "Calculus for Everyday Problems", category: "Mathematics", cover: "calculus.svg",
        clue: "Explore limits, derivatives and integrals."},
    {title: "Understanding Computer Systems", category: "Computing", cover: "systems.svg",
        clue: "Find out how memory and machine instructions work."},
    {title: "Research and Academic Writing", category: "Study skills", cover: "research.svg",
        clue: "Learn how to find sources and write a clear report."}
];

var currentBook = 0;
var score = 0;
var answered = false;

// Show the current book and allow the player to choose a shelf.
function showBook() {
    var book = gameBooks[currentBook];
    document.getElementById("game-title").innerText = book.title;
    document.getElementById("game-clue").innerText = book.clue;
    document.getElementById("game-cover").src = "images/" + book.cover;
    document.getElementById("game-cover").alt = book.title;
    document.getElementById("game-progress").innerText =
        "Book " + (currentBook + 1) + " of " + gameBooks.length;
    document.getElementById("game-score").innerText = score + " / " + gameBooks.length;
    document.getElementById("game-feedback").innerText = "";

    answered = false;
    document.getElementById("shelf-computing").disabled = false;
    document.getElementById("shelf-math").disabled = false;
    document.getElementById("shelf-study").disabled = false;
    document.getElementById("next-book").disabled = true;
    document.getElementById("next-book").innerText = "Next book";
    if (currentBook == gameBooks.length - 1) {
        document.getElementById("next-book").innerText = "See result";
    }
}

// Only the first answer for each book counts towards the score.
function checkAnswer(category) {
    if (answered) {
        return;
    }
    answered = true;
    var correct = gameBooks[currentBook].category;
    var message = document.getElementById("game-feedback");
    if (category == correct) {
        score++;
        message.innerText = "Correct! This book belongs in " + correct + ".";
    } else {
        message.innerText = "This book belongs in " + correct + ". Try the next one!";
    }

    document.getElementById("game-score").innerText = score + " / " + gameBooks.length;
    document.getElementById("shelf-computing").disabled = true;
    document.getElementById("shelf-math").disabled = true;
    document.getElementById("shelf-study").disabled = true;
    document.getElementById("next-book").disabled = false;
}

// Move to the next book, or show the final score after the last answer.
function nextBook() {
    if (currentBook < gameBooks.length - 1) {
        currentBook++;
        showBook();
    } else {
        document.getElementById("game-feedback").innerText =
            "Round finished! You scored " + score + " out of " + gameBooks.length + ".";
        document.getElementById("next-book").disabled = true;
    }
}

// Start from the first book with no points.
function startGame() {
    currentBook = 0;
    score = 0;
    showBook();
}

startGame();
