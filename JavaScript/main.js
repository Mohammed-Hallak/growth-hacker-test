// All Variables

const dropdownToggleFirst = document.querySelector(
  ".dropdown-toggle-session-price"
);
const dropdownMenuFirst = document.querySelector(
  ".dropdown-menu-session-price"
);

const dropdownToggleSecond = document.querySelector(
  ".dropdown-toggle-multiple-benefits"
);
const dropdownMenuSecond = document.querySelector(
  ".dropdown-menu-multiple-benefits"
);
// toggle open header
let toggleMenu = document.querySelector(".toggle-dash");

const cardsContainer = document.getElementById("cardsContainer");

// Toggle the dropdown menu first one
dropdownToggleFirst.addEventListener("click", function () {
  dropdownMenuFirst.classList.toggle("show");
});

// Toggle the dropdown menu first two
dropdownToggleSecond.addEventListener("click", function () {
  dropdownMenuSecond.classList.toggle("show");
});

// Cards Data
const cardsData = [
  {
    imageSrc: "../Images/Asset 2500.png",
    title: "Motivation",
    description:
      "Self-confidence, Mental preparation (studies, sport, employment), concentration",
    link: "View",
  },
  {
    imageSrc: "../Images/Asset 3500.png",
    title: "Addictions",
    description: "Cigarette, Alcohol, Drugs, Gambling (electronic or random)",
    link: "View",
  },
  {
    imageSrc: "../Images/Asset 4500.png",
    title: "Pain perception",
    description:
      "Pain perception is how we feel and understand pain, which depends on our body, mind, and emotions.",
    link: "View",
  },
];

// Create Cards
cardsData.forEach((cardData) => {
  const card = createCard(cardData);
  cardsContainer.appendChild(card);
});

function createCard(cardData) {
  const card = document.createElement("div");
  card.className = "card";

  const imageDiv = document.createElement("div");
  imageDiv.className = "image";

  const image = document.createElement("img");
  image.src = cardData.imageSrc;
  image.alt = "discription img";

  imageDiv.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = cardData.title;

  const description = document.createElement("p");
  description.textContent = cardData.description;

  const link = document.createElement("span");
  link.innerHTML = `<span><i class="fa-solid fa-arrow-right"></i></span> ${cardData.link}`;

  card.appendChild(imageDiv);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(link);

  return card;
}

// Moving Cards

// Data For Moving Cards
const cardsInfo = [
  {
    title: " Hello World",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus sit morbifermentum porttitor augue lobortis felis. Convallis mattisplacerat.",
    link: "View",
  },
  {
    title: "We Are With You",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus sit morbifermentum porttitor augue lobortis felis. Convallis mattisplacerat.",
    link: "View",
  },
  {
    title: "How's Going",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus sit morbifermentum porttitor augue lobortis felis. Convallis mattisplacerat.",
    link: "View",
  },
  {
    title: "Talk to US",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus sit morbifermentum porttitor augue lobortis felis. Convallis mattisplacerat.",
    link: "View",
  },
];

const cardssContainer = document.querySelector(".right .cardsss");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentCardIndex = 0;

function showCurrentCards() {
  const cards = cardssContainer.querySelectorAll(".card");

  // Update the first card
  const card1 = cards[0];
  card1.querySelector("h3").textContent = cardsInfo[currentCardIndex].title;
  card1.querySelector("p").textContent =
    cardsInfo[currentCardIndex].description;

  // Update the second card
  const card2 = cards[1];
  card2.querySelector(".image").style.backgroundImage = `url('${
    cardsInfo[currentCardIndex + 1].imageSrc
  }')`;
  card2.querySelector("h3").textContent = cardsInfo[currentCardIndex + 1].title;
  card2.querySelector("p").textContent =
    cardsInfo[currentCardIndex + 1].description;
}

prevButton.addEventListener("click", function () {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    showCurrentCards();
  }
});

nextButton.addEventListener("click", function () {
  if (currentCardIndex < cardsInfo.length - 2) {
    currentCardIndex++;
    showCurrentCards();
  }
});

showCurrentCards();

// Togle span for time to change from [AM:PM]
let spans = document.querySelectorAll(
  ".contact-us form .right div:last-of-type div span"
);
let previousSpan = null;

for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", function () {
    if (previousSpan !== null) {
      previousSpan.classList.remove("highlight");
    }

    this.classList.add("highlight");
    previousSpan = this;
  });
}

// Open The Links function
toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("open");
});
