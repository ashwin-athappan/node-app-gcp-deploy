import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const start = () => {
	app.listen(3000, () => {
		console.log('🚩 Server is running');
	});
};

start();
