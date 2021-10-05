import express from 'express';
import mongoose from 'mongoose';
import productRouter from './Routers/productRouter.js';
import userRouter from './Routers/userRouter.js';
import dotenv from 'dotenv';
import orderRouter from './Routers/orderRouter.js';
import uploadRouter from './Routers/uploadRouter.js';
import path from 'path';
import offerRouter from './Routers/offersRouters.js';
import offerUploadRouter from './Routers/offerUpload.js';
import electronicRouter from './Routers/electronicsRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/expresscart', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});
// app.get('/api/products/:id', (req, res) => {
// 	const product = data.products.find((x) => x._id === req.params.id);
// 	console.log('-------product----server------', product);
// 	if (product) {
// 		res.send(product);
// 		console.log('------node-----', product);
// 	} else {
// 		res.status(404).send({ message: 'Product not Found' });
// 	}
// });

// app.get('/api/products', (req, res) => {
// 	res.send(data.products);
// });

// app.get('/', (req, res) => {
// 	res.send('Server is ready');
// });

//Routers
app.use('/api/offerUploads', offerUploadRouter);
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use('/api/orders', orderRouter);
app.use('/api/offers', offerRouter);
app.use('/api/product/electronics', electronicRouter);
app.get('/api/config/paypal', (req, res) => {
	res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
//Server
const port = process.env.PORT || 9000;
app.listen(9000, () => {
	console.log(`server is running at http://localhost:${port}`);
});
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});
