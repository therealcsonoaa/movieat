function showMovies() {
    document.getElementById("moviePopup").classList.remove("hidden");
}

function closeMovies() {
    document.getElementById("moviePopup").classList.add("hidden");
}

function watchMovie(movieId) {
    window.location.href = `movie.html?video=${movieId}`;
}

function sendMessage() {
    let input = document.getElementById("chatInput");
    let message = input.value;
    let chatBox = document.getElementById("chatBox");

    if (message.trim() !== "") {
        let p = document.createElement("p");
        p.textContent = message;
        chatBox.appendChild(p);
        input.value = "";
    }
}
function goToDare() {
    window.location.href = "truthordare.html";
}

function sayOk() {
    alert("Ok.");
}