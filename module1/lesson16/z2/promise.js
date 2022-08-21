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

const getUsersByIds = (idsArray) => {
    showLoader();
    Promise.all(idsArray.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`)))
        .then(responses => {
            const resultArray = [];
            responses.forEach((response) => {
                if (!response.ok) throw new Error("Ошибка, не удается выполнить Fetch");
                else resultArray.push(response.json())
            });
            // console.log(resultArray);
            return Promise.all(resultArray);             
        })
        .then(resultArray => {
            // console.log(resultArray);
            outputUsers(resultArray);
        })
        .catch((error) => console.log('Error:', error))
        .finally (() => {
            hideLoader();
            console.log('Fetching finished');            
        });
}

getUsersByIds([5, 6, 2, 1]);