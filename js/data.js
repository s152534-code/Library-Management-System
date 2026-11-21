// Each book has these five details.
function Book(id, title, author, category, status) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.category = category;
    this.status = status;
}

// Each member has an ID, name, type, status and number of loans.
function Member(id, name, type, status, loans) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.status = status;
    this.loans = loans;
}

// The starting records are from Part II. Refreshing restores these arrays.
var books = [
    new Book("BK001", "Foundations of Web Design",
        "Maya Reed", "Computing", "Available"),
    new Book("BK002", "Java Programming Essentials",
        "Omar Hale", "Computing", "Borrowed"),
    new Book("BK003", "A Practical Guide to Databases",
        "Nora Ellis", "Computing", "Available"),
    new Book("BK005", "Understanding Computer Systems",
        "Sam Rowan", "Computing", "Overdue"),
    new Book("BK004", "Calculus for Everyday Problems",
        "Avery Cole", "Mathematics", "Available"),
    new Book("BK006", "Research and Academic Writing",
        "Lina Hart", "Study skills", "Available")
];

var members = [
    new Member("MB001", "Demo Member 01", "Student", "Active", 1),
    new Member("MB002", "Demo Member 02", "Student", "Active", 1),
    new Member("MB003", "Demo Member 03", "Teacher", "Active", 0),
    new Member("MB004", "Demo Member 04", "Community", "Inactive", 0)
];

// Show special characters as text when putting a value inside a table.
function tableText(value) {
    value = value.replace(/&/g, "&amp;");
    value = value.replace(/</g, "&lt;");
    value = value.replace(/>/g, "&gt;");
    return value;
}
