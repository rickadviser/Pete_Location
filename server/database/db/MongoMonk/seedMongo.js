const fs = require('fs');
const csv = require('csv-parser');

const url = 'localhost:27017/rickadvisor-location';
const db = require('monk')(url);

const bulkWriteHandler = async (fileName, dbName) => {
  const saver = async writes => collection.bulkWrite(writes);
  const collection = db.get(`${dbName}`);
  let writes = [];
  let i = 1;
  let keys;
  const read = fs.createReadStream(`${__dirname}/${fileName}`).pipe(csv());
  for await (const chunk of read) {
    i++;
    const obj = {};

    // if the key array exists dont do this every time
    if (!keys) {
      keys = Object.keys(chunk);
    }
    keys.forEach((keyName) => {
      if (keyName === 'latitude' || keyName === 'longitude') {
        obj[keyName] = Number(chunk[keyName]);
      } else {
        obj[keyName] = chunk[keyName];
      }
    });
    writes.push({ insertOne: { document: obj } });
    if (i % 1000 === 0) {
      await saver(writes);
      writes = [];
    }
  }
};

(async () => {
  await bulkWriteHandler('../../../FileRead/hotels.csv', 'hotels');
  await bulkWriteHandler('../../../FileRead/attractions.csv', 'attractions');
  db.close();
})();
