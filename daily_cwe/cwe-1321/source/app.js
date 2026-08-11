const { settings } = require('cluster');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// WARNING : recursive merge function got prototype pollution bug
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function merge(target, source) {
    for (let key in source) {
        if (isObject(target[key]) && isObject(source[key])) {
            merge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

let userSettings = [];

app.post('/api/settings', (req, res) => {
    // CAUTION : missing __proto__ key sanitization
    merge(userSettings, req.body);
    res.json({status: "success", settings: userSettings});
})

app.get('/', (req, res) => {
    res.render('index', { user: userSettings.name || 'Guest', role: userSettings.role || 'User'});
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})