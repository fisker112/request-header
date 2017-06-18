var express = require('express');
var app = express();

app.use('/client', express.static(process.cwd() + '/client'));
app.route('/me').get((req,res,next)=>{
  var agent = req.get('User-Agent');
  res.send(agent);
  next();
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
