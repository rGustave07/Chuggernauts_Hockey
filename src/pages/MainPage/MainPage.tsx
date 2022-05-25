import clsx from "clsx";
import TopNav from "components/TopNav";
import Leaderboard from "components/Leaderboard";

const MainPage = (): JSX.Element => {
	return (
		<div className="relative bg-white overflow-hidden h-screen">
			<div>
				<div className="max-w-7xl mx-auto">
					<div
						className={clsx(
							"relative z-10 pb-8 bg-white",
							"sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 h-[50vh]"
						)}
					>
						<svg
							className={clsx(
								"hidden lg:block absolute right-0 inset-y-0 h-full",
								"w-96 text-white transform translate-x-1/2"
							)}
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>

						<TopNav />
						<main
							className={clsx(
								"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
							)}
						>
							<div className="sm:text-center lg:text-left">
								<h1
									className={clsx(
										"text-4xl tracking-tight font-extrabold",
										"text-gray-900 sm:text-5xl md:text-6xl"
									)}
								>
									<span className="block xl:inline">Chuggernauts Hockey</span>
								</h1>
								<p
									className={clsx(
										"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg",
										"sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
									)}
								>
									A club dedicated to chugging beer, and scoring goals.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<a
											href="#"
											className={clsx(
												"w-full flex items-center justify-center px-8 py-3 border",
												"border-transparent text-base font-medium rounded-md",
												"text-white bg-indigo-600 hover:bg-indigo-700 md:py-4",
												"md:text-lg md:px-10"
											)}
										>
											View Schedule
										</a>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-full max-h-[50vh]">
					<img
						className="h-full w-full object-cover p-5 lg:w-full"
						// eslint-disable-next-line max-len
						src="https://images.unsplash.com/photo-1545471977-94cac22e71ed?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
					/>
				</div>
			</div>
			<Leaderboard />
		</div>
	);
};

export default MainPage;
