import bcrypt from 'bcryptjs';

export const TempData = {
	users: [
		{
			name: 'Raghav',
			email: 'raghav@gmail.com',
			password: bcrypt.hashSync('1234', 8),
			isAdmin: true,
		},
		{
			name: 'kumar',
			email: 'kumar@gmail.com',
			password: bcrypt.hashSync('1234', 8),
			isAdmin: false,
		},
	],

	products: [
		{
			name: 'WROGN',
			category: 'Shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1823142/2017/4/27/11493281526196-WROGN-Men-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-5201493281525914-2.jpg',
			price: 920,
			Brand: 'WROGN',
			rating: 4.5,
			numReviews: 10,
			description: 'Men Blue & Off-White Regular Fit Checked Casual Shirt',
			countInStock: 10,
			discount: 430,
		},
		{
			name: 'Roadstar',
			category: 'Shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1667044/2019/2/28/2781f021-536a-44ca-bc83-42c456bca95f1551335771557-Roadster-Men-Navy--Grey-Checked-Casual-Shirt-341551335769426-1.jpg',
			price: 980,
			Brand: 'Roadstar',
			rating: 4.0,
			numReviews: 17,
			description: 'Men Navy & Grey Checked Casual Shirt',
			countInStock: 0,
			discount: 230,
		},
		{
			name: 'US Polo Assn ',
			category: 'Shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13780182/2021/3/10/e7d8c952-cfd1-4d07-a4a7-6e484dbe13e31615365844209-US-Polo-Assn-Denim-Co-Men-Shirts-3771615365841951-4.jpg',
			price: 1200,
			Brand: 'US Polo Assn',
			rating: 4.5,
			numReviews: 10,
			description:
				'Men Blue & White Regular Fit Checked Pure Cotton Casual Shirt',
			countInStock: 19,
			discount: 560,
		},
		{
			name: 'Allen Solly Sport',
			category: 'Shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13088310/2020/12/24/f2a83e34-db40-4121-9c51-ba03824b914b1608806396758-Allen-Solly-Sport-Men-Shirts-1961608806394783-1.jpg',
			price: 2220,
			Brand: 'Allen Solly',
			rating: 4.5,
			numReviews: 10,
			description: 'Men Pink Slim Fit Solid Casual Shirt',
			countInStock: 24,
			discount: 330,
		},
		{
			name: 'Peter England Casuals',
			category: 'Shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/10/6cf72905-3a8a-47c7-b07f-9b26cb526e6d1594336420730-1.jpg',
			price: 1320,
			Brand: 'Peter England',
			rating: 4.2,
			numReviews: 10,
			description: 'Men Blue & Off-White Regular Fit Checked Casual Shirt',
			countInStock: 0,
			discount: 236,
		},
		{
			name: 'Wrangler',
			category: 'Shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10288169/2019/11/26/4c4e0eca-9cfb-4bef-a063-7fdeece563bd1574758732095-Wrangler-Men-Shirts-5471574758729141-1.jpg',
			price: 1920,
			Brand: 'wrangler',
			rating: 5,
			numReviews: 10,
			description: 'Men Navy Blue & Orange Slim Fit Checked Casual Shirt',
			countInStock: 12,
			discount: 342,
		},
	],
};
