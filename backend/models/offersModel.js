import mongoose from 'mongoose';

const offersSchema = new mongoose.Schema(
	{
		offerName: {
			type: String,
			required: true,
		},

		image: { type: String, required: true },
		occassion: { type: String, required: true },
		category: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Offers = mongoose.model('Offers', offersSchema);
export default Offers;
