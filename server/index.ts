import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/api/users/get', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const start = () => {
	app.listen(3000, () => {
		console.log('🚩 Server is running');
	});
};

start();
