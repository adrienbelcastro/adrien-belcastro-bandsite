function createComment(comment) {
  const timeStamp = comment.timestamp;
  const date = new Date(timeStamp);
  const dateFormat = date.toDateString();

  const commentEl = document.createElement("article");
  commentEl.classList.add("comment__posted");

  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment__container");

  const avatarContainer = document.createElement("div");
  avatarContainer.classList.add("comment__avatar-container");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("comment__inner-container");

  const avatarEl = document.createElement("div");
  avatarEl.classList.add("comment__avatar");
  avatarContainer.appendChild(avatarEl);

  const heading = document.createElement("h3");
  heading.classList.add("comment__name");
  heading.innerText = comment.name;
  console.log(heading);

  const dateEl = document.createElement("p");
  dateEl.classList.add("comment__para");
  dateEl.innerText = dateFormat;

  const contentEl = document.createElement("p");
  contentEl.classList.add("comment__para");
  contentEl.innerHTML = comment.comment;

  innerContainer.append(heading, dateEl);
  commentContainer.append(innerContainer, contentEl);
  commentEl.append(avatarContainer, commentContainer);

  return commentEl;
}

function renderComments(result) {
  const myCommentsEl = document.querySelector(".comment__conversation");
  myCommentsEl.innerHTML = "";

  console.log(result.data);
  for (let i = 0; i < result.data.length; i++) {
    const card = createComment(result.data[i]);
    myCommentsEl.append(card);
  }
}

let nameField = document.querySelector(".comment__form-name");
let commentField = document.querySelector(".comment__form-comment");

function handleFormComment(event) {
  const currentDate = comment.timestamp();

  let name = event.target.name.value;
  let comment = event.target.comment.value;

  if (name.length >= 3 && comment.length >= 3) {
    const cardData = {
      name: name,
      date: `${currentDate.getSeconds()}` + " " + "Seconds Ago",
      // date:`${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`,
      comment: comment,
    };

    comments.unshift(cardData);
    nameField.classList.remove(".comment__form-name--invalid");
    commentField.classList.remove(".comment__form-comment--invalid");
    renderComments();
  } else {
    nameField.classList.add(".comment__form-name--invalid");
    commentField.classList.add(".comment__form-comment--invalid");
    alert("Invalid form values");
  }

  event.preventDefault();
  formEl.reset();
}

const formEl = document.querySelector(".comment__form");
formEl.addEventListener("submit", handleFormComment);

const getComments = axios
  .get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
  .then((result) => {
    console.log("success");
    console.log(result);

    renderComments(result);
  })
  .catch((error) => {
    console.error(error);
  });

// const comments = [
//   {
//     name: "Connor Walton",
//     date: "02/17/2021",
//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Emilie Beach",
//     date: "01/09/2021",
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Miles Acosta",
//     date: "12/20/2020",
//     comment:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

// function createComments (comments) {
//     const commentEl = document.createElement('article');
//     commentEl.classList.add('comment__posted');

//     const commentContainer = document.createElement('div');
//     commentContainer.classList.add('comment__container')

//     const avatarContainer = document.createElement('div');
//     avatarContainer.classList.add('comment__avatar-container');

//     const innerContainer = document.createElement('div');
//     innerContainer.classList.add('comment__inner-container')

//     const avatarEl = document.createElement('div');
//     avatarEl.classList.add('comment__avatar');
//     avatarContainer.appendChild(avatarEl);

//     const heading = document.createElement('h3');
//     heading.classList.add('comment__name')
//     heading.innerText = comments.name;

//     const dateEl = document.createElement('p')
//     dateEl.classList.add('comment__para')
//     dateEl.innerText = comments.date;

//     const contentEl = document.createElement('p');
//     contentEl.classList.add('comment__para')
//     contentEl.innerText = comments.comment;

//     innerContainer.append(dateEl);
//     commentContainer.append(innerContainer, contentEl)
//     commentEl.append (avatarContainer, commentContainer);

//     return commentEl;
// }

// function renderComments() {
//     const myCommentsEl = document.querySelector('.comment__conversation')
//     myCommentsEl.innerHTML = "";

//     for (let i = 0; i < comments.length; i++) {
//         const card = createComments(comments[i]);
//         myCommentsEl.append(card);
//     }
// }

// renderComments();

// let nameField = document.querySelector(".comment__form-name");
// let commentField = document.querySelector(".comment__form-comment");

// function handleFormComment(event) {
//     const currentDate = new Date();

//     let name = event.target.names.value;
//     let comment = event.target.comment.value;

//     if (name.length >= 3 && comment.length >= 3) {

//         const cardData = {
//             name: name,
//             date:`${currentDate.getSeconds()}`+ " " +"Seconds Ago",
// date:`${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`,
//             comment: comment,
//         };

//         comments.unshift(cardData);
//         nameField.classList.remove(".comment__form-name--invalid")
//         commentField.classList.remove(".comment__form-comment--invalid")
//         renderComments();

//     } else {
//         nameField.classList.add(".comment__form-name--invalid")
//         commentField.classList.add(".comment__form-comment--invalid")
//         alert("Invalid form values")

//     }

//     event.preventDefault();
//     formEl.reset();
// }

// const formEl = document.querySelector('.comment__form');
// formEl.addEventListener('submit', handleFormComment);
// renderComments();
