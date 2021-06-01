import mongoose from 'mongoose';

const FurnitureSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, uniqe: true },
		category: { type: String, required: true },
		image: { type: String, required: true },
		price: { type: String, required: true },
		Brand: { type: String, required: true },
		rating: { type: Number, required: true },
		numReviews: { type: Number, required: true },
		description: { type: String, required: true },
		countInStock: { type: Number, required: true },
		discount: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

const Furniture = mongoose.model('Furniture', FurnitureSchema);

export default Furniture;
