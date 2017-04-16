var express = require('express'),
    logger = require('morgan'),
    app = express(),
    home = require('jade').compileFile(__dirname + '/source/templates/homepage.jade'),
    contact = require('jade').compileFile(__dirname + '/source/templates/contact.jade'),
    news = require('jade').compileFile(__dirname + '/source/templates/news.jade'),
    aboutMe = require('jade').compileFile(__dirname + '/source/templates/about.jade'),
    march31 = require('jade').compileFile(__dirname + '/source/templates/blog/2017/march/31.jade'),
    april9 = require('jade').compileFile(__dirname + '/source/templates/blog/2017/april/9.jade');

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/blog/2017/april/9', function(req, res, next) {
  try {
    var html = april9({
        title: 'april 9th'
    });
    res.send(html);
  } catch (e){
    next(e);
  }
});
app.get('/blog/2017/march/31', function(req, res, next) {
  try {
    var html = march31({
        title: 'March 31st'
    });
    res.send(html);
  } catch (e){
    next(e);
  }
});
app.get('/about', function(req, res, next) {
    try {
        var html = aboutMe({
            title: 'About'
        });
        res.send(html);
    } catch (e) {
        next(e);
    }
});
app.get('/news', function(req, res, next) {
    try {
        var html = news({
            title: 'News'
        });
        res.send(html);

    } catch (e) {
        next(e);
    }
});
app.get('/contact', function(req, res, next) {
    try {
        var html = contact({
            title: 'Contact'
        });
        res.send(html);

    } catch (e) {
        next(e);
    }
});
app.get('/', function(req, res, next) {
    try {
        var html = home({
            title: 'Home'
        });
        res.send(html);
    } catch (e) {
        next(e);
    }
});

app.listen(process.env.PORT || 3050, function() {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3050));
});
