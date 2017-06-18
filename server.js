var express = require('express');
var app = express();

app.use('/client', express.static(process.cwd() + '/client'));
app.route('/me').get((req,res,next)=>{
  var agent = req.headers["user-agent"].split('');
  var ind1 = agent.indexOf('(');
  var ind2 = agent.indexOf(')');
  var agent1 = agent.slice(ind1+1,ind2).join('');
  var agent2 = req.headers['accept-language'].split(',')[0];
  var agent3 = req.headers['x-forwarded-for'].split(',')[0];
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({
    ip:agent3,
    language:agent2,
    OS:agent1
  }));
  next();
})

app.get('/',(req,res)=>{
  res.sendFile(process.cwd() + '/client/index.html')
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening on '+ process.env.PORT);
});
