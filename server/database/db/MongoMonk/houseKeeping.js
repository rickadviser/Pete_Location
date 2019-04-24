const url = 'localhost:27017/rickadvisor-location';
const db = require('monk')(url);
const hotels = db.get(`hotels`);
const attractions = db.get('attractions');
var i = 0;
hotels.find(null, 'postalcode',{ stream: true })
  .each(function(doc, {close,pause,resume}){
    i++;
    // console.log('looking for: ',doc.postalcode);
    pause();
    attractions.find({postalcode: doc.postalcode}, '_id')
    .then(stuff =>{
      // console.log('got: ',stuff);
      resume();
    });
    if(i % 10 === 0){
      console.log(i);
    }
  })
  .then(function(){
    // final callback
  })
  .catch(function(err){
    // handle error
  });
  