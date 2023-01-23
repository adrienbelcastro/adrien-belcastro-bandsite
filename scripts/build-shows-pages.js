function createShows(shows) {
  const timeStamp = shows.date;
  const date = new Date(timeStamp);
  const dateFormat = date.toDateString();

  const listEl = document.createElement("article");
  listEl.classList.add("shows__list");

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("shows__content-container");
  listEl.appendChild(dateDiv);

  const dateTitle = document.createElement("h4");
  dateTitle.classList.add("shows__content-subhead");
  dateTitle.innerText = "Date";

  const dateEl = document.createElement("h3");
  dateEl.classList.add("shows__date");
  dateEl.innerText = dateFormat;

  const venueDiv = document.createElement("div");
  venueDiv.classList.add("shows__content-container");
  listEl.appendChild(venueDiv);

  const venueTitle = document.createElement("h4");
  venueTitle.classList.add("shows__content-subhead");
  venueTitle.innerText = "Venue";

  const venueEl = document.createElement("p");
  venueEl.classList.add("shows__content");
  venueEl.innerText = shows.place;

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("shows__content-container");
  listEl.appendChild(locationDiv);

  const locationTitle = document.createElement("h4");
  locationTitle.classList.add("shows__content-subhead");
  locationTitle.innerText = "Location";
  listEl.appendChild(locationTitle);

  const locationEl = document.createElement("p");
  locationEl.classList.add("shows__content");
  locationEl.innerText = shows.location;

  const buttonEL = document.createElement("button");
  buttonEL.classList.add("shows__button");
  buttonEL.innerText = "BUY TICKETS";
  listEl.appendChild(buttonEL);

  dateDiv.appendChild(dateTitle);
  dateDiv.appendChild(dateEl);
  venueDiv.appendChild(venueTitle);
  venueDiv.appendChild(venueEl);
  locationDiv.appendChild(locationTitle);
  locationDiv.appendChild(locationEl);

  return listEl;
}

function renderShows(result) {
  const showsEl = document.querySelector(".shows__container");

  showsEl.innerHTML = "";

  for (let i = 0; i < result.data.length; i++) {
    const card = createShows(result.data[i]);
    showsEl.appendChild(card);
  }
}

let selectedState = document.querySelectorAll(".shows__list");

selectedState.forEach((show) => {
  show.addEventListener("click", (event) => {
    show.classList.toggle("shows__list--selected");
  });
});

const getComments = axios
  .get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
  .then((result) => {
    console.log("success");
    console.log(result);

    renderShows(result);
  })
  .catch((error) => {
    console.error(error);
  });
