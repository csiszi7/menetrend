require('dotenv').config();

const path = require('node:path');
const express = require('express');
const dbConnection = require('./utils/dbConnection.js');

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3700;

dbConnection()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });

app.use('/api', require('./routes/mainRoutesBackend.js'));
app.use('/api/schedules', require('./routes/schedulesRoutesBackend.js'));

