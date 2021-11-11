var express = require('express');
var app = express();
var session = require('express-session');

var path = require('path');

app.use(express.static("resurse"));
app.set('view engine','ejs'); 

app.set('views', './views');

app.use(session({
    secret: '2C43-3RDW-WpEW12S',
    resave: true,
    saveUninitialized: true
}));


app.get('/index', function(req,res) {
 
if (req.session.user === "123" )
{res.render("login")}
else 
{res.render("index")}
})


app.get('/login', function (req, res) {
     console.info(req.body)
  if(req.query.user === "123" && req.query.psw === "123") {
        req.session.user = "123"
        req.session.admin = true
        res.render('login')
       
    }
  else{
          res.send('= <html> <head> <title>HTML Meta Tag</title><meta http-equiv "refresh" content = "0; url = https://proiectnode.adrianamaxim.repl.co/index" /></head><body> </body></html>')
    }

})
 
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send('<meta http-equiv = "refresh" content = "0; url = https://proiectnode.adrianamaxim.repl.co" />')
});




app.use("/",function(req,res){
  res.sendFile(path.resolve('resurse/404.html'));
});

app.listen(4000,function() {
    console.log("App is listening on Port 4000")
})



