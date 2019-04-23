const fs = require('fs');
const csv = require('csv-parser');
const url = 'localhost:27017/testproj';
const db = require('monk')(url);
const collection = db.get('attractions');



var bulkWriteHandler = async (fileName)=>{

  var writes= [];
  var i = 1;
  var keys;
   var read = fs.createReadStream(`${__dirname}/${fileName}`)
    .pipe(csv())
  for await ( const chunk of read){
    // console.log(chunk);
    i++;
    let obj = {};
    
    //if the key array exists dont do this every time
    if(!keys){
      keys = Object.keys(chunk);
    }
    keys.forEach(keyName => {
      obj[keyName] = chunk[keyName]
    });
    writes.push({insertOne:{'document' : obj}});
    if(i%1000===0){
      await ( saver(writes))
      // console.log(writes.length)
        writes = [];
    }
  }



    // .on('data', async (row) =>{
    //   i++;
    //   let obj = {};
      
    //   //if the key array exists dont do this every time
    //   if(!keys){
    //     keys = Object.keys(row);
    //   }
    //   keys.forEach(keyName => {
    //     obj[keyName] = row[keyName]
    //   });
    //   writes.push({insertOne:{'document' : obj}});
    //   if(i%1000===0){
    //     await ( saver(writes))
    //     console.log(writes.length)
    //       writes = [];
    //   }
    // }).on('end', () => {
    //   console.log('CSV succesfully processed');
    // });

}



const saver = async (writes) =>{
  return collection.bulkWrite(writes);
}



(async () => {
await bulkWriteHandler('../../../FileRead/attractions.csv');
db.close();
})()