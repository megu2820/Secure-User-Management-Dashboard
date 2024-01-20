import cors from 'cors';
import express from 'express';
import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.json());

//Path to ping
app.get('/ping', (req, res) => {
    res.send('Hello from Server!');
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Making a POST request to "https://reqres.in/api/login" with email and password
        const response = await axios.post('https://reqres.in/api/login', {
            email,
            password,
        });

        // Sending the response from the ReqRes API to the client
        return res.json(response.data);
    } catch (error) {
        // Handling errors
        // console.error('Error:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Making a POST request to "https://reqres.in/api/register" with email and password
        const response = await axios.post('https://reqres.in/api/register', {
            email,
            password,
        });

        // Sending the response from the ReqRes API to the client
        return res.json(response.data);
    } catch (error) {
        // Handling errors
        // console.error('Error:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(4000, () => {
    console.log('server is running on Port 4000!');
});

export default app;