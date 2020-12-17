const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const route = require('./routes');
const db = require('./config/db');
const methodOverride=require('method-override');
const port = 3000;

// connect db

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan('combined'))

app.use(methodOverride('_method'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers:{
            sum:(a,b)=>a+b,
        }
    }),
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

// routes init
route(app);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
