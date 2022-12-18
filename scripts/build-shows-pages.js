const shows = [
    { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Fransisco, CA" },
    { date: "Mon Sept 21 2021", venue: "Pier 3 East", location: "San Fransisco, CA" },
    { date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Fransisco, CA" },
    { date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Fransisco, CA" },
    { date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Fransisco, CA" },
    { date: "Tues Dec 15 2021", venue: "Press Club", location: "San Fransisco, CA" },
];

function createShows(shows) {
    const listEl = document.createElement('article');
    listEl.classList.add('shows__list');

    const dateDiv = document.createElement('div')
    dateDiv.classList.add('shows__content-container')
    listEl.appendChild(dateDiv);

    const dateTitle = document.createElement('h4')
    dateTitle.classList.add('shows__content-subhead');
    dateTitle.innerText = 'Date';

    const dateEl = document.createElement('h3');
    dateEl.classList.add('shows__date');
    dateEl.innerText = shows.date;

    const venueDiv = document.createElement('div')
    venueDiv.classList.add('shows__content-container')
    listEl.appendChild(venueDiv);

    const venueTitle = document.createElement('h4')
    venueTitle.classList.add('shows__content-subhead');
    venueTitle.innerText = 'Venue';

    const venueEl = document.createElement('p');
    venueEl.classList.add('shows__content');
    venueEl.innerText = shows.venue;

    const locationDiv = document.createElement('div')
    locationDiv.classList.add('shows__content-container')
    listEl.appendChild(locationDiv);
    
    const locationTitle = document.createElement('h4')
    locationTitle.classList.add('shows__content-subhead');
    locationTitle.innerText = 'Location';
    listEl.appendChild(locationTitle);

    const locationEl = document.createElement('p');
    locationEl.classList.add('shows__content')
    locationEl.innerText = shows.location;

    const buttonEL = document.createElement('button')
    buttonEL.classList.add('shows__button');
    buttonEL.innerText = 'BUY TICKETS';
    listEl.appendChild(buttonEL);


    dateDiv.appendChild(dateTitle);
    dateDiv.appendChild(dateEl);
    venueDiv.appendChild(venueTitle);
    venueDiv.appendChild(venueEl);
    locationDiv.appendChild(locationTitle);
    locationDiv.appendChild(locationEl);

    return listEl;
    
}

function renderShows() {
    const showsEl = document.querySelector(".shows__container");
    
    showsEl.innerHTML = "";

    for (let i = 0; i < shows.length; i++) {
        const card = createShows(shows[i]);
        showsEl.appendChild(card);
    }



}



renderShows();