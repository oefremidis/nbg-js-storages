const data = {
  title: 'ice age',
  genre: 'animation',
  runtime: 90
};

// Web Storages
// localStorage, sessionStorage
// setItem, getItem, removeItem
// clear
// length
// key(index)

// document.getElementById('store-local').addEventListener('click', () => {

//   localStorage.setItem('title', data.title);
//   localStorage.setItem('genre', data.genre);
//   localStorage.setItem('runtime', data.runtime);

  // --------------------------------------
  // object like access - not recommended
  // localStorage.director = 'directory name';
  // let y = 'year'
  // localStorage['year'] = 1995;
  // localStorage[y] = 1985;

  // localStorage.setItem('movie', data);

  // object to JSON 
  // localStorage.setItem('movie', JSON.stringify(data))

// });


// document.getElementById('load-local').addEventListener('click', () => {

  // console.log(localStorage.getItem('title'));

  // not recommended
  // console.log(localStorage.title);
  // console.log(localStorage['title']);

  // for(let i=0; i< localStorage.length; i++){
  //   let key = localStorage.key(i);
  //   console.log(key + ' --> ' + localStorage.getItem(key))
  // }

  // for (let key in localStorage){
  //   console.log(key);
  // }

  // // you can filter any object only for its fields
  // let keys = Object.keys(localStorage);
  // console.log(keys);
  // for (let key of keys){
  //   console.log(key);
  // }

  // console.log(localStorage.getItem('movie'));
  
  // json to object
  // console.log(JSON.parse(localStorage.getItem('movie')));

// });


// document.getElementById('clear-local').addEventListener('click', () => {
//     // localStorage.removeItem('genre');
//     localStorage.clear();
// });

// ----------------------------------------
// Cookies

document.getElementById('store-cookie').addEventListener('click', () => {
  // document.cookie = 'genre=animation';
  // document.cookie = 'title=' + data.title;
  // document.cookie = `runtime=${data.runtime}`

  // document.cookie = `${encodeURIComponent("movie' title")} = ${encodeURIComponent(data.title)}`;

  // expires after 1 day
  let date = new Date(Date.now() + 86400e3); // milisecond
  date = date.toUTCString();
  document.cookie = `runtime=${data.runtime}; expires=${date}`; 

  // expires in 1 hour
  // document.cookie = `runtime=${data.runtime}; max-age=3600`; // in seconds

  // expires in 0 second (or -1) delete clear
  // document.cookie = `runtime=${data.runtime}; max-age=0`; // in seconds
  // document.cookie = `runtime=${data.runtime}; max-age=-1`; // in seconds

});


document.getElementById('get-cookie').addEventListener('click', () => {
  console.log(document.cookie);
});

