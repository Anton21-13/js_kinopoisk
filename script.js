const searchForm = document.querySelector('#search-form');

function apiSearch(event) {
  event.preventDefault();
  const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/multi?api_key=90f4726ff9293c0e88e858006da58ff2&language=ru&query=' + searchText;
  requestApi('GET', server);
}

searchForm.addEventListener('submit', apiSearch);

function requestApi(method, url) {
  const request = new XMLHttpRequest();
  request.open(method, url);
  request.send();

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
  });


  

  return url;
}