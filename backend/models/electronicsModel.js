import mongoose from 'mongoose';

const ElectronicsSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, uniqe: true },
		category: { type: String, required: true },
		subcategory: { type: String, required: true },
		image: { type: [String], required: true },
		price: { type: String, required: true },
		Brand: { type: String, required: true },
		rating: { type: Number, required: true },
		numReviews: { type: Number, required: true },
		description: { type: String, required: true },
		availableSizes: { type: [Number], required: false },
		countInStock: { type: Number, required: true },
		discount: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

const Electronics = mongoose.model('Electronics', ElectronicsSchema);

export default Electronics;
