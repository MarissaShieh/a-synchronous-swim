const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const message = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = '../background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
 // console.log('Serving rsequest type ' + req.method + ' for url ' + req.url);
  
  
  if(req.method === 'GET') {
      
     if(req.url === '/directions') {
      
        res.writeHead(200, headers);
        var direction = message.dequeue();
        if(typeof direction === 'string') {  
          res.end(direction);
        }else {
          res.end('');
        }
     }
  
     if(req.url === '/background.jpg'){

        fs.readFile(module.exports.backgroundImageFile, (err, fileData) => {
          if (err) {
            res.writeHead(404);
          } else {
            res.writeHead(200, headers);
            res.write(fileData, 'binary');
          }
          res.end();
          next();
        });
         
     }
  }

  res.end('---');
};

// var randomize = () => {
//   var directions = ['up','down','left','right'];
//   return directions[Math.floor(Math.random() * 4)];
// }