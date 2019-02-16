const fs = require('fs');

let BlogJSONData = fs.readFileSync('./BlogPosts/index.json',{encoding: 'ascii'});
// let writeStream = fs.createWriteStream('../BlogPosts/index.json',{start: BlogJSONData.length, autoClose: true});
// request.payload.pipe(writeStream);
// fs.appendFileSync('../BlogPosts/index.json',`{title: ${title}, description: ${description}},`)
console.log(BlogJSONData);