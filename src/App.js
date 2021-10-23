import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

export default function App() {
	return (
		<section className="max-w-7xl mx-auto">
			<Navbar />
			<div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
				<div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
					<svg
						className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
						viewBox="0 0 100 100"
						fill="currentColor"
						preserveAspectRatio="none slice"
					>
						<path d="M50 0H100L50 100H0L50 0Z" />
					</svg>
					<img
						className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
						src="https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80"
						alt=""
					/>
				</div>
				<div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
					<div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
						<h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
							Place where you can view all
							<br className="hidden md:block" />
							of your <span className="inline-block text-customPink">blog posts</span>
						</h2>
						<p className="pr-5 mb-5 text-base text-gray-700 md:text-md">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
							totam rem aperiam, eaque ipsa quae. explicabo.
						</p>
						<div className="flex items-center">
							<a
								href="/"
								className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-customPink focus:shadow-outline focus:outline-none"
							>
								Get started
							</a>
							<a
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 "
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="h-auto w-full grid grid-cols-2 px-2 lg:px-0 lg:grid-cols-3 gap-x-6 mt-12 ">
				<div className="col-span-2 ">
					<Posts />
				</div>
				<div className="col-span-2 lg:col-span-1 pt-0 lg:pt-12 space-y-6   rounded">
					{" "}
					<img
						className="rounded-sm h-64 w-full object-cover"
						src="https://images.unsplash.com/photo-1518103744022-a2121047f429?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
					/>
					<img
						className="rounded-sm"
						src="https://images.unsplash.com/photo-1554307967-24ebd6cf5b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=760&q=80"
					/>
				</div>
			</div>
			<Footer />
		</section>
	);
}
