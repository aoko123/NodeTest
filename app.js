const express = require('express');
const ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));

app.get('/',(req,res)=>{
  let msg = 'トップページです!';
  res.render('index.ejs',
    {
      title:'Index',
      content:msg,
      link:{href:'/other',text:'別のページに移動'}
    });
});

app.get('/other',(req,res)=>{
  let msg = 'otherページです';
  res.render('index.ejs',
  {
    title:'other',
    content:msg,
    link:{href:'/',text:'トップへ戻る'}
  });
});

app.listen(3000,()=>{
  console.log('Start Server!');
});
