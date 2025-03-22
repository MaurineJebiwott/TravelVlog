// Function to add a new tip
function addTip() {
    let tipInput = document.getElementById("new-tip");
    let tipText = tipInput.value.trim();
    
    if (tipText) {
        let listItem = document.createElement("li");
        listItem.textContent = tipText;
        document.getElementById("tips-list").appendChild(listItem);
        tipInput.value = "";
    }
}

// Function to add a comment
function addComment() {
    let commentInput = document.getElementById("comment-text");
    let commentText = commentInput.value.trim();

    if (commentText) {
        let listItem = document.createElement("li");
        listItem.textContent = commentText;
        document.getElementById("comments-list").appendChild(listItem);
        commentInput.value = "";
    }
}
