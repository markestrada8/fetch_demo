// const movies = require('./data')
// // import { movies } from './data'

// movies.forEach(movie => {
//   const heading = document.createElement('h1')
//   heading.innerHTML = movie.title
//   console.log(heading)
// })
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => {
    const h3 = document.createElement('h3')
    h3.innerText = `${json.title}`
    document.body.appendChild(h3)
  });


const button = document.querySelector('.submit')

button.addEventListener('click', () => {
  console.log('submit')
  fetch('https://example.com/profile', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
})
