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

    const dateTitle = document.createElement('h3')
    dateTitle.classList.add('shows__content--title');
    dateTitle.innerText = 'Date';
    listEl.appendChild(dateTitle);

    const dateEl = document.createElement('h3');
    dateEl.innerText = shows.date;
    dateEl.classList.add('shows__date');

    const venueTitle = document.createElement('h3')
    venueTitle.classList.add('shows__content--title');
    venueTitle.innerText = 'Venue';
    listEl.appendChild(venueTitle);

    const venueEl = document.createElement('p');
    venueEl.classList.add('shows__content');
    venueTitle.innerText = shows.venue;

    const locationTitle = document.createElement('h3')
    locationTitle.classList.add('shows__content--title');
    locationTitle.innerText = 'Location';
    listEl.appendChild(locationTitle);

    const locationEl = document.createElement('p');
    locationEl.classList.add('shows__content')
    locationEl.innerText = shows.location;

    listEl.appendChild(dateEl);
    listEl.appendChild(venueEl);
    listEl.appendChild(locationEl);

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