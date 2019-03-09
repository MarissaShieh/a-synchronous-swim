const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const message = require('./keypressHandler');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
 // console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  
  if(req.method === 'GET')
    res.write(message);  
  
  res.end();
};
var randomize = () => {
  var directions = ['up','down','left','right'];
  return directions[Math.floor(Math.random() * 4)];
}


