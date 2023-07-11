const axios = require('axios');

const apikey = '1ef1cb69c8e642e8845a4ac66b6d565c';
const news = 'Apple';

const query= `https://newsapi.org/v2/everything?q=${news}&apiKey=${apikey}`;

axios.get(query).then( (response) =>{
console.log(response.data.articles[0].source.name);
console.log(response.data.articles[0].author);
console.log(response.data.articles[0].title);
console.log(response.data.articles[0].url);
}
);