// Build the table again whenever we search, add or update a book.
function displayBooks() {
    var query = "";
    var category = "All categories";

    // The Manage Books page uses this table without search fields.
    if (document.getElementById("book-query") != null) {
        query = document.getElementById("book-query").value.toLowerCase();
        category = document.getElementById("filter-category").value;
    }

    var rows = "<thead><tr><th>Category</th><th>ID</th><th>Title</th>";
    rows += "<th>Author</th><th>Status</th></tr></thead><tbody>";
    var count = 0;

    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        var text = (book.id + " " + book.title + " " + book.author).toLowerCase();

        // An empty search matches all books. The category must also match.
        if (text.indexOf(query) != -1 &&
            (category == "All categories" || category == book.category)) {
            var id = book.id;

            // The original six books have pages with more details.
            if (i < 6) {
                id = '<a href="book-details.html#' + book.id + '">';
                id += book.id + "</a>";
            }

            rows += "<tr><td>" + book.category + "</td>";
            rows += "<td>" + id + "</td>";
            rows += "<td>" + tableText(book.title) + "</td>";
            rows += "<td>" + tableText(book.author) + "</td>";
            rows += "<td>" + book.status + "</td></tr>";
            count++;
        }
    }

    if (count == 0) {
        rows += '<tr><td colspan="5">No books match your search.</td></tr>';
    }

    document.getElementById("book-table").innerHTML = rows + "</tbody>";
    document.getElementById("book-count").innerText =
        "Showing " + count + " of " + books.length + " books.";
}

// Clear both search fields before showing the full table.
function resetBookSearch() {
    document.getElementById("book-query").value = "";
    document.getElementById("filter-category").value = "All categories";
    displayBooks();
}

// Read the form and either add a new book or replace an existing book.
function saveBook() {
    var id = document.getElementById("book-id").value;
    var title = document.getElementById("book-title").value;
    var author = document.getElementById("book-author").value;
    var category = document.getElementById("book-category").value;
    var status = document.getElementById("book-status").value;
    var updating = false;

    if (document.getElementById("operation") != null) {
        updating = document.getElementById("operation").value == "Update a book";
    }

    // Find the book with this ID. -1 means it is not in the array.
    var position = -1;
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            position = i;
        }
    }

    if (!updating && position != -1) {
        alert("This book ID is already used. Please choose another ID.");
        document.getElementById("book-id").focus();
        return false;
    }
    if (updating && position == -1) {
        alert("This book ID was not found. Choose Add a book for a new ID.");
        document.getElementById("book-id").focus();
        return false;
    }

    var book = new Book(id, title, author, category, status);
    if (updating) {
        books[position] = book;
    } else {
        books.push(book);
    }

    if (document.getElementById("book-query") != null) {
        resetBookSearch();
    } else {
        displayBooks();
    }
    document.getElementById("book-message").innerText = id + " saved.";

    // Keep the page open so the next addition uses the same array.
    return false;
}

displayBooks();
