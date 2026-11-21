// Display members whose ID or name matches the search.
function displayMembers() {
    var query = document.getElementById("member-query").value.toLowerCase();
    var type = document.getElementById("filter-type").value;
    var rows = "<thead><tr><th>ID</th><th>Name</th><th>Type</th>";
    rows += "<th>Status</th><th>Active loans</th></tr></thead><tbody>";
    var count = 0;

    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        var text = (member.id + " " + member.name).toLowerCase();

        if (text.indexOf(query) != -1 &&
            (type == "All types" || type == member.type)) {
            rows += "<tr><td>" + member.id + "</td>";
            rows += "<td>" + tableText(member.name) + "</td>";
            rows += "<td>" + member.type + "</td>";
            rows += "<td>" + member.status + "</td>";
            rows += "<td>" + member.loans + "</td></tr>";
            count++;
        }
    }

    if (count == 0) {
        rows += '<tr><td colspan="5">No members match your search.</td></tr>';
    }

    document.getElementById("member-table").innerHTML = rows + "</tbody>";
    document.getElementById("member-count").innerText =
        "Showing " + count + " of " + members.length + " members.";
}

// Remove both filters and show all members again.
function resetMemberSearch() {
    document.getElementById("member-query").value = "";
    document.getElementById("filter-type").value = "All types";
    displayMembers();
}

// Add the form values to the array, then update the table.
function addMember() {
    var id = document.getElementById("member-id").value;
    var name = document.getElementById("member-name").value;
    var type = document.getElementById("member-type").value;
    var status = document.getElementById("member-status").value;
    var loans = Number(document.getElementById("member-loans").value);

    // Two members should not have the same ID.
    for (var i = 0; i < members.length; i++) {
        if (members[i].id == id) {
            alert("This member ID is already used. Please choose another ID.");
            document.getElementById("member-id").focus();
            return false;
        }
    }

    members.push(new Member(id, name, type, status, loans));
    resetMemberSearch();
    document.getElementById("member-message").innerText = id + " added.";
    return false; // Do not reload and lose the new members.
}

displayMembers();
