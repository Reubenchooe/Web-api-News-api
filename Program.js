const connect = require('./Connect');
const axios = require('axios');
const apikey = '1ef1cb69c8e642e8845a4ac66b6d565c';
const news = 'Apple';
const query = `https://newsapi.org/v2/everything?q=${news}&apiKey=${apikey}`;
axios.get(query).then( (response) =>{
filmValue = new connect ({
Source:response.data.articles[0].source.name,
Author:response.data.articles[0].author,
Title:response.data.articles[0].title,
Url:response.data.articles[0].url
});
filmValue.save().then(result=> {
console.log("Success" + result);
})
.catch (error=> {
console.log("Error" + error);
}
);
});
