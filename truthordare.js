// Truth and Dare Lists
const truths = {
    freaky: [
        "Have you ever had a naughty dream about me?",
        "What’s the most risqué text you’ve ever sent?",
        "Would you rather have a steamy video call or an in-person make-out session?",
        "What’s your biggest turn-on that I don’t know about?",
        "Have you ever had a fantasy you were too shy to share?",
        "What's the most scandalous thing you've ever done in public?",
        "Describe in detail how you would seduce me right now.",
        "What’s the most spontaneous thing you’d want to do with me?",
        "What part of my body do you want to explore the most?",
        "If you could do anything to me right now, what would it be?",
        "Have you ever lied to me about being busy just to tease me?",
        "What’s something dirty you’ve imagined doing but never tried?",
        "What’s your favorite thing I do that drives you wild?",
        "Have you ever sent a spicy picture that you regretted?",
        "What's a scene from a movie you'd want to recreate with me?"
    ],
    heartfelt: [
        "What’s something small I do that makes you really happy?",
        "When did you realize you had feelings for me?",
        "What’s one memory with me you’ll never forget?",
        "What do you miss the most when we're apart?",
        "What’s a song that reminds you of me and why?",
        "How do you imagine our perfect day together?",
        "What’s one thing about me that always makes you smile?",
        "If you could describe our relationship in one word, what would it be?",
        "What’s something you admire about me that I don’t realize?",
        "Where do you see us in the next five years?"
    ]
};

const dares = [
    "Send me a 10-second voice message saying something freaky.",
    "Describe in detail what you would do to me if we were alone.",
    "Take a seductive selfie and send it to me.",
    "Write a spicy text but don’t send it until I say ‘Go!’",
    "Do a video call and wink at me for 10 seconds straight.",
    "Change your profile picture to something suggestive for 1 hour.",
    "Lick your lips slowly on camera and send it to me.",
    "Whisper my name in the sexiest way possible and record it.",
    "Send me a voice message explaining your last wild dream.",
    "Write my name somewhere on your body and show me.",
    "Turn off the lights and describe what you'd do to me.",
    "Send me a flirty text but make it super cheesy.",
    "Let me choose something for you to do right now.",
    "Tell me what you’d do if we were in the same bed.",
    "Recreate a scene from a romantic movie on video call.",
    "Describe your favorite intimate memory of us.",
    "Take off one piece of clothing and send a pic (PG-friendly).",
    "Write a short fantasy story about us.",
    "Call me and say something you wouldn’t dare say in public.",
    "Do 10 push-ups while thinking of me and send proof.",
    "Find a romantic song and send it to me, explaining why.",
    "Describe how you'd kiss me if we were together.",
    "Send me an emoji that represents how you feel right now.",
    "Let me control your next text message to someone else.",
    "Confess one of your deepest secrets."
];

// Function to get a random truth
function getTruth() {
    let category = Math.random() > 0.5 ? "freaky" : "heartfelt";
    let question = truths[category][Math.floor(Math.random() * truths[category].length)];
    document.getElementById("question").innerText = question;
}

// Function to get a random dare
function getDare() {
    let dare = dares[Math.floor(Math.random() * dares.length)];
    document.getElementById("question").innerText = dare;
}
