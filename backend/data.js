import bcrypt from 'bcryptjs';

export const data = {
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
			category: 'Fasion',
			subcategory: 'shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1823142/2017/4/27/11493281526196-WROGN-Men-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-5201493281525914-2.jpg',
			price: 920,
			Brand: 'WROGN',
			rating: 4.5,
			numReviews: 10,
			description: 'Men Blue & Off-White Regular Fit Checked Casual Shirt',
			availableSizes: ['40', '42', '44', '46'],
			countInStock: 10,
			discount: 430,
		},
		{
			name: 'Roadstar',
			category: 'Fasion',
			subcategory: 'shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1667044/2019/2/28/2781f021-536a-44ca-bc83-42c456bca95f1551335771557-Roadster-Men-Navy--Grey-Checked-Casual-Shirt-341551335769426-1.jpg',
			price: 980,
			Brand: 'Roadstar',
			rating: 4.0,
			numReviews: 17,
			description: 'Men Navy & Grey Checked Casual Shirt',
			availableSizes: ['40', '42', '44', '46'],
			countInStock: 0,
			discount: 230,
		},
		{
			name: 'US Polo Assn ',
			category: 'Fasion',
			subcategory: 'shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13780182/2021/3/10/e7d8c952-cfd1-4d07-a4a7-6e484dbe13e31615365844209-US-Polo-Assn-Denim-Co-Men-Shirts-3771615365841951-4.jpg',
			price: 1200,
			Brand: 'US Polo Assn',
			rating: 4.5,
			numReviews: 10,
			description:
				'Men Blue & White Regular Fit Checked Pure Cotton Casual Shirt',
			availableSizes: ['40', '42', '44', '46'],
			countInStock: 19,
			discount: 560,
		},
		{
			name: 'Allen Solly Sport',
			category: 'Fasion',
			subcategory: 'shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13088310/2020/12/24/f2a83e34-db40-4121-9c51-ba03824b914b1608806396758-Allen-Solly-Sport-Men-Shirts-1961608806394783-1.jpg',
			price: 2220,
			Brand: 'Allen Solly',
			rating: 4.5,
			numReviews: 10,
			description: 'Men Pink Slim Fit Solid Casual Shirt',
			availableSizes: ['40', '42', '44', '46'],
			countInStock: 24,
			discount: 330,
		},
		{
			name: 'Peter England Casuals',
			category: 'Fasion',
			subcategory: 'shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/10/6cf72905-3a8a-47c7-b07f-9b26cb526e6d1594336420730-1.jpg',
			price: 1320,
			Brand: 'Peter England',
			rating: 4.2,
			numReviews: 10,
			description: 'Men Blue & Off-White Regular Fit Checked Casual Shirt',
			availableSizes: ['40', '42', '44', '46'],
			countInStock: 0,
			discount: 236,
		},
		{
			name: 'Wrangler',
			category: 'Fasion',
			subcategory: 'shirt',
			image:
				'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10288169/2019/11/26/4c4e0eca-9cfb-4bef-a063-7fdeece563bd1574758732095-Wrangler-Men-Shirts-5471574758729141-1.jpg',
			price: 1920,
			Brand: 'wrangler',
			rating: 5,
			numReviews: 10,
			description: 'Men Navy Blue & Orange Slim Fit Checked Casual Shirt',
			availableSizes: ['40', '42', '44', '46'],
			countInStock: 12,
			discount: 342,
		},
	],

	Electronics: [
		{
			name: 'HP 15s Ryzen 5 Quad Core 3500U - (8 GB/512 GB SSD/Windows 10 Home) ',
			category: 'Laptops',
			image: [
				'https://rukminim1.flixcart.com/image/416/416/k7531jk0/computer/e/a/h/hp-original-imafpfs893zu5mhb.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/k5h2jrk0/computer/z/f/b/hp-na-original-imafz5gj6ng2bpzd.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/k5h2jrk0/computer/z/f/b/hp-na-original-imafz5gjhw2jnghh.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/k5h2jrk0/computer/z/f/b/hp-na-original-imafz5gjyhsjemtv.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/k5h2jrk0/computer/z/f/b/hp-na-original-imafz5gj9mxfvczg.jpeg?q=70',
			],

			price: 49499,
			Brand: 'HP',
			rating: 4.5,
			numReviews: 10,
			description:
				'Stylish & Portable Thin and Light Laptop 15.6 Inches Full HD WLED Backlit, Anti-Glare Micro-Edge Display (220 nits Brightness, 141 PPI, 45% NTSC Color Gamut) Light Laptop without Optical Disk Drive',

			countInStock: 10,
			discount: 11430,
		},
		{
			name: 'ASUS Athlon Dual Core 3050U - (4 GB/1 TB HDD/Windows 10 Home)',
			category: 'Laptops',
			image: [
				'https://rukminim1.flixcart.com/image/416/416/kl9rssw0/computer/o/g/w/asus-original-imagyfp899keyhq2.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kl9rssw0/computer/4/e/e/asus-original-imagyfp8zs7epnsz.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kl9rssw0/computer/x/x/r/asus-original-imagyfp8zchusuyq.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kl9rssw0/computer/v/b/y/asus-original-imagyfp8gfztyhdv.jpeg?q=70',
			],
			price: 56799,
			Brand: 'Asus',
			rating: 4.0,
			numReviews: 17,
			description:
				'Stylish & Portable Thin and Light Laptop 15.6 inch Full HD LED Backlit Anti-glare Display (200 nits Brightness, 45% NTSC Color Gamut, 83% Screen-to-body Ratio, 16:9 Aspect Ratio) Finger Print Sensor for Faster System Access Light Laptop without Optical Disk Drive',

			countInStock: 5,
			discount: 1230,
		},
		{
			name: 'acer Aspire 5 Core i3 11th Gen - (4 GB/1 TB HDD/Windows 10 Home) A515-56 Thin and Light Laptop',
			category: 'Laptops',
			image: [
				'https://rukminim1.flixcart.com/image/416/416/kkh6zrk0/computer/0/j/u/acer-original-imafztjqzju67ddf.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kkh6zrk0/computer/g/z/q/acer-original-imafztjqzjhg7s6x.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kkh6zrk0/computer/u/a/g/acer-original-imafztjqzj8yxf6f.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kkh6zrk0/computer/j/o/3/acer-original-imafztjqqfhnkk2x.jpeg?q=70',
			],
			price: 41999,
			Brand: 'Acer',
			rating: 4.0,
			numReviews: 17,
			description:
				'Stylish & Portable Thin and Light Laptop 15.6 inch Full HD LED Backlit ComfyView Display (16:9 Aspect Ratio) Light Laptop without Optical Disk Drive',

			countInStock: 5,
			discount: 1230,
		},
		{
			name: 'DELL Inspiron Core i3 10th Gen - (8 GB/1 TB HDD/Windows 10 Home) ',
			category: 'Laptops',
			image: [
				'https://rukminim1.flixcart.com/image/416/416/kl5hh8w0/computer/i/5/o/dell-original-imagychcwdg562a7.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kl5hh8w0/computer/c/q/j/dell-original-imagychc4mgw7ky7.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kiow6fk0/computer/x/n/y/dell-original-imafyff7gc7yk6zy.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kl5hh8w0/computer/u/j/c/dell-original-imagychcf3avgxy9.jpeg?q=70',
			],
			price: 45999,
			Brand: 'Dell',
			rating: 4.0,
			numReviews: 17,
			description:
				'Pre-installed Genuine Windows 10 OS Preloaded with MS Office Light Laptop without Optical Disk Drive 15.6 inch Full HD LED Backlit Anti Glare Display',

			countInStock: 55,
			discount: 3230,
		},
		{
			name: 'MSI GP65 Leopard Core i7 10th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 2060/144 Hz) ',
			category: 'Laptops',
			image: [
				'https://rukminim1.flixcart.com/image/416/416/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kmxsakw0/computer/b/r/7/na-laptop-msi-original-imagfq9c89cygdyf.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kmxsakw0/computer/b/x/g/na-laptop-msi-original-imagfq9cugsewpcb.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kmxsakw0/computer/y/0/b/na-laptop-msi-original-imagfq9cfpb7kkkd.jpeg?q=70',
			],
			price: 99799,
			Brand: 'MSI',
			rating: 4.0,
			numReviews: 17,
			description:
				'With the MSI GP65 Leopard 10SEK-830IN gaming laptop, you can play the latest titles and your favourite games whenever you want. This laptop features an NVIDIA GeForce RTX 20 Series Graphics card for smooth gaming visuals, Dedicated Thermal Solutions for the GPU and CPU for effective cooling, and a 144 Hz IPS-level Thin Bezel Display for an immersive viewing experience.',

			countInStock: 5,
			discount: 92730,
		},
		{
			name: 'Lenovo Core i5 9th Gen - (8 GB/1 TB HDD/Windows 10 Home/3 GB Graphics/NVIDIA GeForce GTX 1050',
			category: 'Laptops',
			image: [
				'https://rukminim1.flixcart.com/image/416/416/kn3i1zk0/computer/b/b/4/na-gaming-laptop-lenovo-original-imagfuzs7ydtn5ys.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kn3i1zk0/computer/u/h/j/na-gaming-laptop-lenovo-original-imagfuzszcehrump.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kn3i1zk0/computer/y/j/u/na-gaming-laptop-lenovo-original-imagfuzskkq5wnhz.jpeg?q=70',
				'https://rukminim1.flixcart.com/image/416/416/kn3i1zk0/computer/a/5/0/na-gaming-laptop-lenovo-original-imagfuzs8ympje9a.jpeg?q=70',
			],
			price: 45999,
			Brand: 'Lenovo',
			rating: 4.5,
			numReviews: 17,
			description:
				'NVIDIA GeForce GTX 1050 ,15.6 inches Full HD IPS Anti-Glare Display (250 nits Brightness) ,Light Laptop without Optical Disk Drive ,Pre-installed Genuine Windows 10 OS',

			countInStock: 5,
			discount: 2430,
		},
	],
};
