
A simple website in node js to accompany a blog post.

## Setup

```
npm run build
npm start
---- WHEN NOT USING ON DEDICATED SERVER ----
# development mode (watches for source changes)
npm run watch
```
in Order to make a new page
1. Make the page at --source--templates--example.jade
2. in ```server.js``` at the top put ```, examplePage = require('jade').compileFile(__dirname + '/source/templates/example.jade');```
<<<<<<< HEAD
3. then still in ```server.js``` after the line you just created add this
```
app.get('/exampleSubject', function(req, res, next) {
  try {
  var html = examplePage({title: 'exampleTitle' });
  res.send(html);
    } catch (e) {
      next(e);
    }
});
