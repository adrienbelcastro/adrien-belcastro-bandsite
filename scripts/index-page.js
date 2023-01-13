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

  for (let i = 0; i < result.data.length; i++) {
    const card = createComment(result.data[i]);
    myCommentsEl.append(card);
  }
}

let nameField = document.querySelector(".comment__form-name");
let commentField = document.querySelector(".comment__form-comment");

function handleFormComment(event) {
  event.preventDefault();
  const currentDate = new Date();

  let name = event.target.names.value;
  let comment = event.target.comment.value;

  const postComments = axios
    .post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`, {
      name: name,
      comment: comment,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

  // if (name.length >= 3 && comment.length >= 3) {
  //   const cardData = {
  //     name: name
  //     date:`${currentDate.getSeconds()}` + " " + "Seconds Ago",
  //     date:`${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`,
  //     comment: comment,
  //   };

  //   comments.unshift(cardData);
  //   nameField.classList.remove(".comment__form-name--invalid");
  //   commentField.classList.remove(".comment__form-comment--invalid");
  //   renderComments();
  // } else {
  //   nameField.classList.add(".comment__form-name--invalid");
  //   commentField.classList.add(".comment__form-comment--invalid");
  //   alert("Invalid form values");
  // }
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
