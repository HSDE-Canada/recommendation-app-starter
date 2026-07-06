console.log("JavaScript is connected");

let selectedMood = "";

const moodCards = document.querySelectorAll(".mood-card");
const recommendButton = document.querySelector("#recommend-button");
const resultCard = document.querySelector("#result-card");
const resultIcon = document.querySelector("#result-icon");
const resultTitle = document.querySelector("#result-title");
const resultMessage = document.querySelector("#result-message");
const closeButton = document.querySelector("#close-button");

moodCards.forEach(function(card) {
  card.addEventListener("click", function() {
    moodCards.forEach(function(otherCard) {
      // Challenge 1: Remove the selected class from each mood card.
      otherCard.classList.remove("selected");
    });

    // Challenge 2: Add the selected class to the card the user clicked.
    card.classList.add("selected");

    // Challenge 3: Store the mood from the clicked card's data-mood attribute.
    selectedMood = card.dataset.mood;

    console.log("Selected mood:", selectedMood);
  });
});

recommendButton.addEventListener("click", function() {
  console.log("Button clicked");

  // Challenge 4: Write the condition that checks whether selectedMood is still empty.
  if () {
    resultIcon.textContent = "👀";
    resultTitle.textContent = "Choose a mood first!";
    resultMessage.textContent = "Click one of the mood cards before getting a recommendation.";
  } else {
    showRecommendation(selectedMood);
  }

  resultCard.classList.remove("hidden");
});

closeButton.addEventListener("click", function() {
  resultCard.classList.add("hidden");
});

function showRecommendation(mood) {
  // Challenge 5: Write the condition that checks whether the mood is happy.
  if () {
    resultIcon.textContent = "🎮";
    resultTitle.textContent = "Play a fun game!";
    resultMessage.textContent = "You seem cheerful today. Try playing a game, building a mini project, or doing something fun with a friend.";

  // Challenge 6: Write the condition that checks whether the mood is relaxed.
  } else if () {
    resultIcon.textContent = "🎬";
    resultTitle.textContent = "Watch something cozy!";
    resultMessage.textContent = "You seem calm and relaxed. A funny video, cozy movie, or quiet music playlist could be perfect.";

  // Challenge 7: Write the condition that checks whether the mood is curious.
  } else if () {
    resultIcon.textContent = "📚";
    resultTitle.textContent = "Explore something new!";
    resultMessage.textContent = "Your curious mood is great for learning. Try reading, watching a science video, or researching a topic you like.";

  // Challenge 8: Write the condition that checks whether the mood is energetic.
  } else if () {
    resultIcon.textContent = "⚽";
    resultTitle.textContent = "Do an active challenge!";
    resultMessage.textContent = "You have lots of energy today. Try a sport, dance break, walk outside, or a fast creative challenge.";
  }
}
