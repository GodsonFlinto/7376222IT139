const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) =>
        res.send('Hello World! - 7376222IT139 - GODSON FLINTO J'))
app.get('/hii', (req, res) =>
        res.send('Hello World! - 7376222IT123 - DEEPAK S'))
app.get('/bye', (req, res) =>
        res.send('Hello World! - 7376222IT178- KRISHNA M M'))
    
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))