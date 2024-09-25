import express from 'express';
import bodyParser from 'body-parser';
import { appendFile } from 'fs/promises';
import path from 'path';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd())));

// Handle form submission
app.post('/submit', async (req, res) => {
    const { name, email } = req.body;
    const data = `Name: ${name}, Email: ${email}\n`;

    try {
        await appendFile('data.txt', data);
        res.send('Data saved successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while saving data.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

