import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

const start = () => {
	app.listen(3000, () => {
		console.log('🚩 Server is running');
	});
};

start();
