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

const getUsersByIds = (users) => {
    let usersList = [];
    users.forEach((element) => {
        usersList = users.map(element => fetch(`https://jsonplaceholder.typicode.com/users/${element}`));
    });
    Promise.all(usersList)
        .then(responses => {
            const results = [];
            responses.forEach((element) => {
                if (!element.ok) throw Error('Ошибка, не удается выполнить Fetch');
                else results.push(element.json())
            });
            console.log(results);
            return Promise.all(results);             
        })
        .then(results => {
            console.log(results);
            outputUsers(results);
        })
        .catch((error) => {console.log('Error:', error)})
        .finally (() => {
            hideLoader();
            console.log('Fetching finished');            
        });
}

getUsersByIds([5, 6, 2, 1]);