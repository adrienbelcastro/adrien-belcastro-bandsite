const comments = [
    { name: 'Connor Walton', date: '02/17/2021', comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    { name: 'Emilie Beach', date: '01/09/2021', comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    { name: 'Miles Acosta', date: '12/20/2020', comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
];


function createComments (comments) {
    const commentEl = document.createElement('article');
    commentEl.classList.add('comment__posted');

    const heading = document.createElement('h3');
    heading.innerText = comments.name;

    const dateEl = document.createElement('p')
    dateEl.innerText = comments.date;

    const contentEl = document.createElement('p');
    contentEl.innerText = comments.comment;

    commentEl.append (heading, dateEl, contentEl);

    return commentEl;
}

function renderComments() {
    const myCommentsEl = document.querySelector('.comment__conversation')
    myCommentsEl.innerHTML = "";

    for (let i = 0; i < comments.length; i++) {
        const card = createComments(comments[i]);
        myCommentsEl.append(card);
    }
}

renderComments();


function handleFormComment(event) {
    event.preventDefault();

    // if (event.target.agreement.checked === false) {
    //     alert ('please fill out all empty fields.');
    //     return;
    // }
    const d = new Date()

    const cardData = {
        name: event.target.name.value,
        comment: event.target.comment.value,
    };

    formEl.reset();
    comments.unshift(cardData);
    renderComments();
}

const formEl = document.querySelector('.comment__form');
formEl.addEventListener('submit', handleFormComment);
renderComments();


