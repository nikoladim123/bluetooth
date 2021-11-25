var express = require('express');
var app = express();
var cors = require('cors');

const featurePolicy = require("feature-policy");

// ...

app.use(
  featurePolicy({
    features: {
      ambientLightSensor: ["'none'"]
    },
  })
);

app.use(cors())
app.use(express.static('frontEnd'));

app.use(express.json())

app.get('/',(req,res)=>{
  console.log(123);
  res.sendFile('index.html');
})
app.post('/123',(req,res)=>{
  console.log('i work');
  console.log(req.body);
})
app.listen(3000);
//..
