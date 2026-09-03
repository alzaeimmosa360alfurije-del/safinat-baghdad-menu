const express = require('express');
const path = require('path');
const fs = require('fs');
const menuData = require('./data/menuData');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname, )));

// جلب كافة أسماء الصور الموجودة في المجلد بشكل تلقائي

app.get('/api/menu', (req, res) => {
    res.json(menuData);
});

app.get('/api/images', (req, res) => {
    const imagesDir = path.join(__dirname,  'images');
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }
        const imageFiles = files.filter(file => /\.(jpeg|jpg|png|gif)$/i.test(file));
        res.json(imageFiles);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});