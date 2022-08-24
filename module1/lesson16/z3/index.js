// Lesson 16-3

const renderAlbums = async () => {
try{
    showLoader();
    const request = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await request.json();
    for (item in albums) {
        const albumTitle = albums[item].title;
        showAlbum(albumTitle);

    }
}
catch(error){
    console.log (error);
}  
finally {
    hideLoader();
    console.log('Fetching finished');      
}
}

const showLoader = () => {
  const getLoader = document.querySelector("#loader");
  getLoader.style.display = 'initial';
};

const hideLoader = () => {
    const getLoader = document.querySelector("#loader");
    getLoader.style.display = "none";
};

const showAlbum = (albumTitle) => {
    const albumsUl = document.querySelector(".data-container");
    const albumLi = document.createElement('li');
    albumLi.innerHTML = albumTitle;
    albumsUl.appendChild(albumLi);
};

renderAlbums();