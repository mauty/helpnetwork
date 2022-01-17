const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const requestsRouter = require('./routes/requests');
const resourcesRouter = require('./routes/resources');
const conversationsRouter = require('./routes/conversations');

const cors = require('cors')
const app = express();


app.use(cors());
app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', requestsRouter);
app.use('/', resourcesRouter);
app.use('/', conversationsRouter);

module.exports = app;
