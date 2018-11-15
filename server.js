const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "11 index tigernodeandspace server"
    })
})

// Reaching here, no route has matched the request
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Sending the error, from the 404 or any other source
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const port = 5000;
app.set('port', process.env.PORT || port)

app.listen(app.get("port"), () => console.log(
    `Server on port ${port}`
));