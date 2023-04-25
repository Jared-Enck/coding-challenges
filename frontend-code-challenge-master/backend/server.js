const app = require('./app');
const logger = require('./lib/logger');
const log = logger(app);

const port = process.env.PORT || 5000;

const server = app.listen(port, function() {
  log.info(`Express server listening on http://localhost:${port}`, server.address().port);
});
