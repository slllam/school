// Lesson 15 Promise

const outputUsers = (users) => {
    const getContainer = document.body.querySelector('#data-container');
    for (const user of users) {
      const userLi = document.createElement("li");
      getContainer.appendChild(userLi);
      const userData = document.createElement("a");
      userData.href = `#${user.id}`;
      userData.innerHTML = user.name;
      userLi.appendChild(userData);
    }
};

const showLoader = () => {
  const getLoader = document.querySelector("#loader");
  getLoader.style.display = 'initial';
};

const hideLoader = () => {
    const getLoader = document.querySelector("#loader");
    getLoader.style.display = "none";
};

fetch("https://jsonplaceholder.typicode.com/users")
    .then((responce) => {
        if (!responce.ok) {
            throw new Error("Ошибочка вышла");
        }
        showLoader();
        return responce.json();
    })
    .then((responce_data) => {
        outputUsers(responce_data);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
      hideLoader();
      console.log('Fetching finished');
    });