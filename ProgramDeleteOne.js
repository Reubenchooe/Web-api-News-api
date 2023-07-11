const connect = require('./Connect')
connect.deleteOne({Title:"FaceTime is coming to Apple TV"})
.then(res=> {
console.log("Success deleting one");
});
