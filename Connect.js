const mongoose = require('mongoose');
const db =
"mongodb+srv://Bryan_Tan:XSjwexJ1Vw2r8Bkb@cluster0.fz5iyzi.mongodb.net/Movie"

mongoose.connect(db).then(()=> {
console.log("Connected to database");
}
)
.catch(()=> {
console.log("Can't connect to database");
}
)
const filmSchema = new mongoose.Schema({
Source: { type: String},
Author: { type: String},
Title: { type: String},
Url: { type: String}
}
);
const Connect = mongoose.model('movies', filmSchema);
module.exports = Connect;

    