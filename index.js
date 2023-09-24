document.addEventListener("DOMContentLoaded", function () {
  const quoteButton = document.getElementById("quoteButton");
  const quoteText = document.getElementById("quoteText");

  const sampleQuotes = [
    "Bring out the whole ocean",
    "Call me asparagus",
    "Life is Roblox",
    "Budget approved",
    "Let's go golfing",
    "Let's go to the beach",
    "You ever play rugby??",
    "They didn't belive in us... God did",
    "And perhaps what is this?",
    "Bring out the whole restaurant",
    "Call me Tiger Woods",
    "Let's go swimming",
    "I call her chandelier",
  ];

  function getRandomQuote() {
    return sampleQuotes[Math.floor(Math.random() * sampleQuotes.length)];
  }

  quoteButton.addEventListener("click", function () {
    const randomQuote = getRandomQuote();
    quoteText.innerText = randomQuote;
  });
});
