function showTimes() {
    document.getElementById("times").classList.remove("hidden");
}

function selectTime(time) {
    let zoomLink = "https://zoom.us/your-meeting-link"; // Replace with your actual Zoom link

    document.getElementById("meetingLink").value = zoomLink;
    document.getElementById("linkSection").classList.remove("hidden");
    document.getElementById("reminder").innerText = `Click the link at ${time} to join the movie night!`;
}

function copyLink() {
    let link = document.getElementById("meetingLink");
    link.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
}
