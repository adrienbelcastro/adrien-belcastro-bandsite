function createComment(comment) {
  const timeStamp = comment.timestamp;
  const date = new Date(timeStamp);
  const format = { year: "numeric", month: "2-digit", day: "2-digit" };
  const dateFormat = date.toLocaleDateString("en-US", format);

  const commentEl = document.createElement("article");
  commentEl.classList.add("comment__posted");

  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment__container");

  const avatarContainer = document.createElement("div");
  avatarContainer.classList.add("comment__avatar-container");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("comment__inner-container");

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("comment__btn-container");

  const avatarEl = document.createElement("div");
  avatarEl.classList.add("comment__avatar");
  avatarContainer.appendChild(avatarEl);

  const heading = document.createElement("h3");
  heading.classList.add("comment__name");
  heading.innerText = comment.name;

  const dateEl = document.createElement("p");
  dateEl.classList.add("comment__para");
  dateEl.innerText = dateFormat;

  const contentEl = document.createElement("p");
  contentEl.classList.add("comment__para");
  contentEl.innerHTML = comment.comment;

  const likeButton = document.createElement("button");
  likeButton.classList.add("comment__like-button");
  likeButton.innerText = `❤️ ${comment.likes}`;
  likeButton.setAttribute("id", comment.id);
  likeButton.addEventListener("click", handleLikes);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("comment__delete-button");
  deleteButton.innerText = "🗑";
  deleteButton.setAttribute("id", comment.id);
  deleteButton.addEventListener("click", handleDelete);

  innerContainer.append(heading, dateEl);
  commentContainer.append(innerContainer, contentEl, btnContainer);
  commentEl.append(avatarContainer, commentContainer);
  btnContainer.append(likeButton, deleteButton);

  return commentEl;
}

let commentsArray = [];

function renderComments(result) {
  const myCommentsEl = document.querySelector(".comment__conversation");
  myCommentsEl.innerHTML = "";

  for (let i = 0; i < result.data.length; i++) {
    const card = createComment(result.data[i]);
    myCommentsEl.append(card);

    commentsArray.push(myCommentsEl);
  }
}
let nameField = document.querySelector(".comment__form-name");
let commentField = document.querySelector(".comment__form-comment");

const getComments = () => {
  axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
    .then((result) => {
      console.log("success");
      console.log(result);

      result.data.sort(function (a, b) {
        return b.timestamp - a.timestamp;
      });
      console.log(result.data);
      renderComments(result);
    })
    .catch((error) => {
      console.error(error);
    });
};

getComments();

function handleFormComment(event) {
  event.preventDefault();

  let name = event.target.names.value;
  let comment = event.target.comment.value;

  if (name.length >= 3 && comment.length >= 3) {
    nameField.classList.remove(".comment__form-name--invalid");
    commentField.classList.remove(".comment__form-comment--invalid");
    const postComments = axios
      .post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`, {
        name: name,
        comment: comment,
      })
      .then((result) => {
        console.log(result);

        getComments();
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    nameField.classList.add(".comment__form-name--invalid");
    commentField.classList.add(".comment__form-comment--invalid");
    alert("At least 3 characters required for name");
  }

  formEl.reset();
}

// function to handle the like button
let handleLikes = (event) => {
  let likeID = event.target.id;
  console.log(likeID);

  const getLikes = axios
    .put(
      `https://project-1-api.herokuapp.com/comments/${likeID}/like?api_key=${apiKey}`
    )
    .then((result) => {
      console.log("success");
      console.log(result);

      getComments();
    })
    .catch((error) => {
      console.error(error);
    });
};
let handleDelete = (event) => {
  let likeID = event.target.id;

  const deleteComments = axios
    .delete(
      `https://project-1-api.herokuapp.com/comments/${likeID}/?api_key=${apiKey}`
    )
    .then((result) => {
      console.log("success");
      console.log(result);

      getComments();
    })
    .catch((error) => {
      console.error(error);
    });
};

const formEl = document.querySelector(".comment__form");
formEl.addEventListener("submit", handleFormComment);
