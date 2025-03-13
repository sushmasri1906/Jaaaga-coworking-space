import Image from "next/image";

const founders = [
	{
		name: "Digamber Gujjari",
		designation: "Designated Partner",

		image:
			"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741327047/2_ym1kor.jpg",
	},
	{
		name: "DODDAKA NARAYANA SWAMI",
		designation: "Designated Partner",

		image:
			"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741327062/n_f2djcv.jpg",
	},
	{
		name: "SANTHARAM KONDURU",
		designation: "Partner",

		image:
			"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741417814/12_twn942.jpg",
	},
];
const Founders = () => {
	return (
		<section className="py-16 bg-white text-center">
			<h2 className="text-4xl font-bold text-gray-900">Meet Our Founders</h2>
			<p className="text-gray-600 mt-2">Visionaries behind our success</p>

			<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
				{founders.map((founder, index) => (
					<div
						key={index}
						className=" p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center">
						<div className="relative w-40 h-55  overflow-hidden  shadow-md flex items-center justify-center bg-gray-100 px-6 py-12">
							<Image
								src={founder.image}
								alt={founder.name}
								layout="fill"
								objectFit="cover"
							/>
						</div>

						<h3 className="mt-4 text-xl font-semibold text-gray-900">
							{founder.name}
						</h3>
						<p className="text-gray-800 font-medium">{founder.designation}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Founders;
