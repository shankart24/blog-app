const posts = [
	{
		title: "Some random post",

		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
		date: "Mar 16, 2020",

		imageUrl:
			"https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
	},
	{
		title: "How to use search engine ",

		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
		date: "Sept 10, 2020",

		imageUrl:
			"https://images.unsplash.com/photo-1627288516547-24afcea63eab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsdWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
	},

	{
		title: "Some other heading here",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
		date: "Mar 2, 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1534179523731-b2922018150a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
	},
];

export default function Posts() {
	return (
		<div className="relative  pb-16 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
			<div className="absolute inset-0">
				<div className="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div className="relative ">
				<div className="text-left">
					<h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-customBlue sm:text-4xl sm:leading-none">
						Blog Posts
					</h2>
					<p className="pr-5 mb-5 text-base text-gray-700 md:text-md">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
					</p>
				</div>
				<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
					{posts.map((post) => (
						<div key={post.title}>
							<a
								href="/"
								aria-label="View Item"
								className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
							>
								<div className="flex flex-col h-full">
									<img src={post.imageUrl} className="object-cover w-full h-48" alt="" />
									<div className="flex-grow border border-t-0 rounded-b">
										<div className="p-5">
											<h5 className="mb-4 font-semibold leading-5 text-customPink text-lg">{post.title}</h5>
											<p className="text-sm text-gray-600 font-medium line-clamp-3">{post.description}</p>
											{/* <p className="text-customBlue bg-customYellow rounded-full w-28 text-center p-2 font-semibold mt-6 text-sm">
												{post.date}
											</p> */}
											<p className="text-customBlue  rounded-full  font-semibold mt-6 text-sm">
												{post.date}
											</p>
										</div>
									</div>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
