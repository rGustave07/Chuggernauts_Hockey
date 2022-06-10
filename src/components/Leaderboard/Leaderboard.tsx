import { useState } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/solid";

interface Categories {
	category: "Goals" | "Assists" | "Pims";
	key: "goals" | "assists" | "pims";
}

const leaderboardCategories: Categories[] = [
	{ category: "Goals", key: "goals" },
	{ category: "Assists", key: "assists" },
	{ category: "Pims", key: "pims" },
];

interface Player {
	playerNumber: number;
	playerFirstName: string;
	playerLastName: string;
	goals: number;
	assists: number;
	pims: number;
	gamesPlayed: number;
	avatar: string;
}

interface LeaderboardData {
	players: Player[];
}

const leaderboardData = {
	players: [
		{
			playerNumber: 32,
			playerFirstName: "John",
			playerLastName: "Smith",
			goals: 3,
			assists: 0,
			pims: 12,
			gamesPlayed: 5,
			avatar: "",
		},
		{
			playerNumber: 8,
			playerFirstName: "Jane",
			playerLastName: "Blimy",
			goals: 0,
			assists: 2,
			pims: 0,
			gamesPlayed: 5,
			avatar: "",
		},
		{
			playerNumber: 99,
			playerFirstName: "Gordon",
			playerLastName: "Bombay",
			goals: 0,
			assists: 0,
			pims: 2,
			gamesPlayed: 2,
			avatar:
				"https://images.unsplash.com/photo-" +
				"1517841905240-472988babdf9?ixlib=rb-1.2.1" +
				"&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit" +
				"=facearea&facepad=2&w=256&h=256&q=80",
		},
		{
			playerNumber: 0,
			playerFirstName: "Harry",
			playerLastName: "Tape",
			goals: 4,
			assists: 4,
			pims: 4,
			gamesPlayed: 8,
			avatar: "",
		},
	],
};

interface Leader {
	id: number;
	playerNumber: number;
	playerName: string;
	categoryCount: number;
}

const Leaderboard = (): JSX.Element => {
	const [category, setCategory] = useState("goals");

	const renderTable = (selectedCategory: Categories["key"]) => {
		const sortedPlayerArray = leaderboardData.players.sort(
			(playerA: Player, playerB: Player) =>
				playerB[selectedCategory] - playerA[selectedCategory]
		);

		return (
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm \
													font-semibold text-gray-900 sm:pl-6"
											>
												Rank
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm \
															font-semibold text-gray-900"
											>
												<a href="#" className="group inline-flex">
													Player
												</a>
											</th>
											{leaderboardCategories.map((item, i) => (
												<th
													key={item.category}
													scope="col"
													className="px-3 py-3.5 text-left text-sm /
																		font-semibold text-gray-900"
												>
													<a href="#" className="group inline-flex">
														{item.category}
														<span
															className="invisible ml-2 flex-none rounded /
													text-gray-400 group-hover:visible group-focus:visible"
														>
															<ChevronDownIcon
																className={clsx(
																	"invisible ml-2 h-5 w-5 flex-none rounded ",
																	"text-gray-400 group-hover:visible ",
																	"group-focus:visible"
																)}
																aria-hidden="true"
																onClick={(e) => {
																	setCategory(item.key);
																}}
															/>
														</span>
													</a>
												</th>
											))}
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{sortedPlayerArray.map((item, i) => (
											<tr key={i}>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{i + 1}
												</td>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
													<div className="flex items-center">
														{item.avatar ? (
															<div className="h-10 w-10 flex-shrink-0">
																<img
																	className="h-10 w-10 rounded-full"
																	src={item.avatar}
																	alt=""
																/>
															</div>
														) : (
															<span
																className={
																	"inline-flex items-center justify-" +
																	"center h-10 w-10 rounded-full bg-gray-500"
																}
															>
																<span
																	className={
																		"font-medium leading-none text-white"
																	}
																>
																	{item.playerFirstName[0]}
																	{item.playerLastName[0]}
																</span>
															</span>
														)}
														<div className="ml-4">
															<div className="font-medium text-gray-900">
																{item.playerFirstName} {item.playerLastName}
															</div>
															<div className="text-gray-500">
																#{item.playerNumber}
															</div>
														</div>
													</div>
												</td>
												{leaderboardCategories.map((cat, i) => (
													<td
														key={Math.random()}
														className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
													>
														{item[cat.key]}
													</td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="flex flex-col justify-center">
			<div>{renderTable((category as Categories["key"]) ?? "goals")}</div>
		</div>
	);
};

export default Leaderboard;
