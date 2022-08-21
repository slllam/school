// Lesson 15, Promise.race

const showPhoto = (url, title) => {
    const getContainer = document.body.querySelector('#data-container');
      const photoLi = document.createElement("li");
      photoLi.class = 'photo-item';
      getContainer.appendChild(photoLi);

      const photoImg = document.createElement("img");
      photoImg.class = 'photo-item__image';
      photoImg.src = url;
      photoLi.appendChild(photoImg);

      const photoTitle = document.createElement("h3");
      photoTitle.class = 'photo-item__title';
      photoTitle.innerHTML = title;
      photoLi.appendChild(photoTitle);    
};

const showLoader = () => {
  const getLoader = document.querySelector("#loader");
  getLoader.style.display = 'initial';
};

const hideLoader = () => {
    const getLoader = document.querySelector("#loader");
    getLoader.style.display = "none";
};

const getFastestLoadedPhoto = (ids) => {
    showLoader();
    Promise.race(ids.map(id => fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)))
        .then(response => {
            if (!response.ok) throw new Error("Ошибка при выполнении Fetch");
            else return  result = response.json();  
        })
        .then (result => showPhoto(result.url, result.title))
        .catch((error) => console.log(error))
        .finally(() => {
            hideLoader();
            console.log('Fetching finished');      
        })
}

getFastestLoadedPhoto([7, 8, 99, -1]);