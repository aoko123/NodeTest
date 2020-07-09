const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  let msg = 'トップページです!';
  res.render('index.ejs',
    {
      title:'Index',
      content:msg,
      link:{href:'/create',text:'別のページに移動'}
    });
});

app.get('/create',(req,res)=>{
  let msg = 'otherページです';
  res.render('create.ejs',
  {
    title:'create',
    content:msg,
    link:{href:'/',text:'トップへ戻る'}
  });
});

app.post('/ajax',(req,res)=>{
  let msg = '「' + req.body.message + '」と送信しました';
  console.log(msg);
  let message = {};
  message.msg = msg;
  res.json(message);
});

app.listen(3000,()=>{
  console.log('Start Server!');
});
