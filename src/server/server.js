const hapi = require('hapi');
const Joi = require('joi');
const fs = require('fs');

const server = hapi.Server({
    host: 'localhost',
    port: 3005,
});

server.route({
    method: "POST",
    path: '/',
    config: {
        validate: {
            payload: {
                title: Joi.string().required(),
                description: Joi.string().required(),
                timeToRead: Joi.number().required(),
                date: Joi.string().required(),
            }
        }
    },
    handler: (request,h)=>{
        const { title, description, timeToRead, date} = request.payload;
        let BlogJSONData = fs.readFileSync('../BlogPosts/index.js',{encoding: "ascii"});
        let text = BlogJSONData.substring(BlogJSONData.length-1,);
        let writeStream = fs.createWriteStream('../BlogPosts/index.js',{flags: 'r+', start: BlogJSONData.length-1, autoClose: true});
        writeStream.write(`{title: '${title}', description: '${description}', timeToRead: '${timeToRead} mins', date: '${date}', claps: 0, like: 0, toggle: false},${text}`);
        writeStream.end();
        return BlogJSONData;
    }
});

const init = async ()=>{
    await server.start();
}
init();

process.on('SIGINT', () => {
    server.stop({ timeout: 10000 }).then((err) => {
      console.log(err);
      process.exit((err) ? 1 : 0);
    });
  });