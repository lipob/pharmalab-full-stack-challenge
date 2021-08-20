const server = require('./src/app.js');
const db = require('./src/db');

const port = 3001;

db.sync()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    })
  });