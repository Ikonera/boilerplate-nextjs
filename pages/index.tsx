import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<section className="flex justify-center">
			<div className="rounded-lg shadow-xl bg-primary my-96 py-6 px-4 transition-shadow ease-linear duration-200 hover:shadow-none">
				<a className="font-normal py-4 px-6" href="https://www.github.com/Ikonera/boilerplate-nextjs" target="_blank">
					Ikonera - Nextjs boilerplate repository
				</a>
			</div>
		</section>
	);
};

export default Home;
